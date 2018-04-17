import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

validateRegister(Roof){
  if(Roof.Distance == undefined || Roof.Rate == undefined || 
  Roof.ProjectSize == undefined || Roof.DateOfComplition == undefined){
    return false;
  }else{
    return true;
  }
  
}

}
