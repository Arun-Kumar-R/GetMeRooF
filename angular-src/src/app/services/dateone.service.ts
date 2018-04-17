import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DateoneService {

 private _getUrl ="roofs/date/asce/one";
private _url ="/roofs/date/desc/one";
  constructor(private _http:Http) { }

  //asce
getDateOneAsce(){
  return this._http.get(this._getUrl)
    .map((response :Response) => response.json());
}

//desc
getDateOneDesc(){
  return this._http.get(this._url)
    .map((response :Response) => response.json());

}
}




