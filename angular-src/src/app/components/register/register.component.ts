import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

Distance:Number;
Rate:Number;
ProjectSize:Number;
DateOfComplition:Date;
  constructor(private validateService:ValidateService,
  private authService:AuthService,
  private router:Router
  ) { }

  ngOnInit() {
  }
  onRegisterSubmit()
  {
    const Roof = {
      Distance:this.Distance,
      Rate:this.Rate,
      ProjectSize:this.ProjectSize,
      DateOfComplition:this.DateOfComplition
    }

//Required fileds
if(!this.validateService.validateRegister(Roof)){
console.log("please fill in all fields");
alert("Please Fill in All Fields ");
return false;

}
//register roof
    
    this.authService.registerRoof(Roof).subscribe(data =>{
      if(data.success){
         console.log("success");
         alert("you are now registered");
         this.router.navigate(['/projects']);
      }else{
       console.log("failed");
         alert("you are falied to registered");
         this.router.navigate(['/register']);
      }
    });
}

}
