import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Rx";

@Injectable()
export class DataService implements Resolve<any> {


    constructor(private http: HttpClient) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return this.http.get('demo/assets/data/data.json')
            .map(data => data)

    }
}