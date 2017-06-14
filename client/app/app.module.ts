import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { PhotoModule } from './photo/photo.module';
import { PanelModule } from './panel/panel.module';
import { ButtonModule } from './button/button.module';
import { ModalModule } from './modal/modal.module';

import { routing } from './app.routes';

import 'rxjs/add/operator/map';

@NgModule({
    imports: [ 
        BrowserModule, 
        PhotoModule, 
        HttpModule, 
        PanelModule,
        FormsModule,
        ReactiveFormsModule,
        routing,
        ButtonModule,
        ModalModule
    ],
    declarations: [ AppComponent, FormComponent, ListComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }