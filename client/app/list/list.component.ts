import { Component } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { PhotoComponent } from '../photo/photo.component';
import { PanelComponent } from '../panel/panel.component';

@Component({
    moduleId: module.id,
    selector: 'list',
    templateUrl: './list.component.html',
})
export class ListComponent {
    //photos: Array<Object> = [];
    photos: PhotoComponent[] = [];
    service: PhotoService;
    message: string = '';

    constructor(service: PhotoService) {
        this.service = service;
        this.service.list()
               .subscribe(photos => {
                    this.photos = photos;
               }, error => console.log(error));
    }

    remove(photo: PhotoComponent, panel: PanelComponent) {
        this.service
            .remove(photo)
            .subscribe(() =>  {
                panel.fadeOut(() => {
                    let newPhotos = this.photos.slice(0);
                    let index = newPhotos.indexOf(photo);
                    newPhotos.splice(index, 1);
                    
                    this.photos = newPhotos;
                    this.message = 'Foto removida com sucesso!';
                });
            }, error => {
                this.message = 'Não foi possível remover a foto!';
                console.log(error);
            });
    }
}