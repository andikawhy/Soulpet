import { Injectable } from '@angular/core';
import { Parameter, Pet } from '../parameter';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Response } from '@angular/http/src/static_response';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import 'rxjs/Rx';

@Injectable()

export class PetService {
    private petsUrl: any = 'http://www.soulpet.odc-abcd.com/parameter';
    private nama: any = 'http://www.soulpet.odc-abcd.com/name';
    headers: any = new Headers({ 'Content-Type': 'application/json' });
    options: any = new RequestOptions({ headers: this.headers });

    constructor(
        private _http: Http,
    ) {

    }

    postNama(nama: any): Observable<any> {
        return this._http.post(this.nama, nama, this.options)
            .map((res: Response) => res.json())
            .pipe(
            catchError(this.handleError<any>('getPet')),
        );
    }

    generatePet(pet: any): Observable<any> {
        return this._http.post(this.petsUrl, pet, this.options)
            .map((res: Response) => res.json())
            .pipe(
            catchError(this.handleError<any>('getPet')),
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            console.error(error);
            return of(result as T);
        };
    }

}
