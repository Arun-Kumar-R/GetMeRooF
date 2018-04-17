import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DateService {

private _getUrl ="roofs/date/asce/all";
private _url ="roofs/date/desc/all";
  constructor(private _http:Http) { }

//asce

getDate(){
  return this._http.get(this._getUrl)
    .map((response :Response) => response.json());
}

//desc
getDateDescAll(){
  return this._http.get(this._url)
    .map((response :Response) => response.json());

}
}






