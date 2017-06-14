import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo.component';
import { TitleFilter } from './photo.pipes'
import { PhotoService } from './photo.service';

@NgModule({
    declarations: [ PhotoComponent, TitleFilter ],
    exports: [ PhotoComponent, TitleFilter ],
    providers: [ PhotoService ]
})
export class PhotoModule { }