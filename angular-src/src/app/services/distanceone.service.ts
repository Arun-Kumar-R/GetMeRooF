import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DistanceoneService {

private _getUrl ="roofs/distance/asce/one";
private _url ="roofs/distance/desc/one";
  constructor(private _http:Http) { }

  getDistanceOneAsce(){
  return this._http.get(this._getUrl)
    .map((response :Response) => response.json());

}

  getDistanceOneDesc(){
  return this._http.get(this._url)
    .map((response :Response) => response.json());


}
}