import { Component } from '@angular/core';
import { PhotoComponent } from '../photo/photo.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: './form.component.html'
})
export class FormComponent {
    photo: PhotoComponent = new PhotoComponent();
    form: FormGroup;
    service: PhotoService;
    route: ActivatedRoute;
    router: Router;
    message: string = '';

    constructor(fb: FormBuilder, service: PhotoService, route: ActivatedRoute, router: Router) {
        this.route = route;
        this.router = router;
        this.service = service;

        this.route.params.subscribe(params => {
            let id = params['id'];
            
            if(id) {
                this.service
                    .byId(id)
                    .subscribe(
                        photo => this.photo = photo, 
                        error => console.log(error));
            }
        });

        
        this.form = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)]) ],
            url: ['', Validators.required],
            descricao: ['']
        })
    }

    save(event) {
        event.preventDefault();
        
        this.service
            .save(this.photo)
            .subscribe(response =>  {
                this.message = response.message;

                this.photo = new PhotoComponent();
                if (!response.created)
                    this.router.navigate(['']);
            });
    }
}