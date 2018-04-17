import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SizeoneService {

private _getUrl ="roofs/size/asce/one";
private _url ="roofs/size/desc/one";

  constructor(private _http:Http) { }

//ascending
getSizeOneAsce(){
  return this._http.get(this._getUrl)
    .map((response :Response) => response.json());
}

//descending
getSizeOneDesc(){
  return this._http.get(this._url)
    .map((response :Response) => response.json());
}
}
