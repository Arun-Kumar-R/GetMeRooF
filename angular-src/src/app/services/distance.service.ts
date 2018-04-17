import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DistanceService {

private _getUrl ="roofs/distance/asce/all";
private _url ="roofs/distance/desc/all";
  constructor(private _http:Http) { }

//ascending method

getDistance(){
  return this._http.get(this._getUrl)
    .map((response :Response) => response.json());
}

//descending method
getDistDescAll(){
  return this._http.get(this._url)
    .map((response :Response) => response.json());
}
}





