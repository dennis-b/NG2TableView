import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class DataService implements CanActivate {

    constructor(private http:Http) {
    }

    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|boolean {
        return this.http.get('demo/data/data.json')
            .map(res => {
                next.params['users'] = res.json();
                return true;
            })
            .take(1);
    }
}