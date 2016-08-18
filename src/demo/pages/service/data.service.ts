import {Injectable} from '@angular/core';
import {Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class DataService implements Resolve<any> {


    constructor(private http: Http) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
        return this.http.get('demo/data/data.json')
            .map(res => res.json())

    }
}