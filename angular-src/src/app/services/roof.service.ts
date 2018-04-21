import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Roof } from '../models/roof.model';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class RoofService {

private serviceUrl = "Roofs/sort";
  constructor(private http:HttpClient) { }

getUser():Observable<Roof[]>{
  return this.http.get<Roof[]>(this.serviceUrl);
}
}
