import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SizeService {

  private _getUrl ="roofs/size/asce/all";
  private _url ="roofs/size/desc/all";
  constructor(private _http:Http) { }


//ascending
getSize(){
  return this._http.get(this._getUrl)
    .map((response :Response) => response.json());
}

//desc
getSizeDescAll(){
  return this._http.get(this._url)
    .map((response :Response) => response.json());
}
}





