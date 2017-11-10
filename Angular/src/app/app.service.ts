import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AdminComponent } from './admin/admin.component';
import { AdminmoviesComponent } from './adminmovies/adminmovies.component';

@Injectable()
export class SeriesService implements OnInit {

    constructor(private _http: Http) { }
    private urlseries: string = "http://localhost:8888/api/v1/series";
    private url = 'http://localhost:8888/api/v1/user';
    private urlloginusers: string = "http://localhost:8888/api/v1/userlogin";
    private urlgetseries: string = "http://localhost:8888/api/v1/getSeries";
    
    PostSeries(Data) {
        // let headers=new Headers({ 'Content-Type': 'application/json' });
        // let options=new RequestOptions({ headers: headers });
        console.log(Data);
        return this._http.post(this.urlseries, Data).map(
            (res: Response) => res.json());
    }
    PostUsers(Data) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        console.log(Data);
        return this._http.post(this.url, Data, options).map(
            (res: Response) => res.json());
    }
    LoginUser(Data) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        console.log(Data);
        return this._http.post(this.urlloginusers, Data, options).map(
            (res: Response) => res.json());
    }
    GetItems() {
        return this._http.get(this.urlgetseries).map((res) => res.json());
      }
    ngOnInit() {

    }
}