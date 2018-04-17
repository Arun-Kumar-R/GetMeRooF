import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

//import { map } from "rxjs/operator/map";

@Injectable()
export class AuthService {
authToken:any;
Roof:any;
  constructor(private http:Http) { }
registerRoof(Roof){
  let headers = new Headers();
  headers.append('content-type','application/json');

  return this.http.post('Roofs/register', Roof,{ headers:headers})
    .map(res => res.json());
  }
}
