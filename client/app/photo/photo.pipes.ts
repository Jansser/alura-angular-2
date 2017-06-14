import { Pipe, PipeTransform } from '@angular/core';
import { PhotoComponent } from './photo.component';

@Pipe({
    name: 'titleFilter'
})
export class TitleFilter implements PipeTransform { 
    transform(photos: PhotoComponent[], search: string) {
        search = search.toLowerCase();
        return photos.filter( photo => photo.titulo.toLowerCase().includes(search) );        
    }
}