import { Http, Headers, Response } from '@angular/http';
import { PhotoComponent } from './photo.component';
import { Observable } from  'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {
    http: Http;
    headers: Headers;
    url: string = 'v1/fotos';

    constructor(http: Http) {
        this.http = http;

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    save(photo: PhotoComponent): Observable<FormMessage> {
        let config = { headers: this.headers };

        if(photo._id) {
            return this.http
                .put(this.url + '/' + photo._id, JSON.stringify(photo), config)
                .map(() => new FormMessage('Foto alterada com sucesso!', false));
        } else {
            return this.http
                .post(this.url, JSON.stringify(photo), config)
                .map(() => new FormMessage('Foto incluída com sucesso!', true));
        }        
    }

    list(): Observable<PhotoComponent[]> {
        return this.http
            .get(this.url)
            .map(response => response.json())
    }

    remove(photo:PhotoComponent) {
        return this.http.delete(this.url + '/' + photo._id);
    }

    byId(id: string):Observable<PhotoComponent> {
        return this.http.get(this.url + '/' + id)
                .map(response => response.json());
    }
} 

export class FormMessage {
    constructor(private _message: string, private _created: boolean) {
        this._message = _message;
        this._created = _created;
    }

    get message(): string {
        return this._message;
    }

    get created(): boolean {
        return this._created;
    }
}