import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RateService {

 private _getUrl ="roofs/rate/asce/all";
 private _url ="roofs/rate/desc/all";
  constructor(private _http:Http) { }

//ascending
getRate(){
  return this._http.get(this._getUrl)
    .map((response :Response) => response.json());
}

//descnding order
getRateDescAll(){
  return this._http.get(this._url)
    .map((response :Response) => response.json());
}

}






