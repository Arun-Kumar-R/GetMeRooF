import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class RateoneService {


 private _getUrl ="roofs/rate/asce/one";
 private _url ="roofs/rate/desc/one";
   constructor(private _http:Http) { }

//ascending
getRateOneAsce(){
  return this._http.get(this._getUrl)
    .map((response :Response) => response.json());
}


//desc
getRateOneDesc(){
  return this._http.get(this._url)
    .map((response :Response) => response.json());
}



}







