import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  Role: any = [ 'ADMIN','MANAGER', 'BUYER'];
 
  user:User= new User();
  
  constructor(private userservice: UserserviceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveMerchant(){
    this.userservice.createMerchant(this.user).subscribe( data =>{
      console.log(data);
     this.goToMerchantList();
    },
    error => console.log(error));
  }

  goToMerchantList(){
    this.router.navigate(['/admin/userlist']);
  }
  
  onSubmit(){
    console.log(this.user);
    this.saveMerchant();
  }

}
