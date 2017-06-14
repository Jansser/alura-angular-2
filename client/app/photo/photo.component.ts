import  { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'photo',
    templateUrl: './photo.component.html',
    styleUrls: [ './photo.component.css' ],
})
export class PhotoComponent { 
    @Input() titulo: string;
    @Input() url: string;
    description: string;
    _id: string;
}