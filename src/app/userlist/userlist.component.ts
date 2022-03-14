import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  user: User[] | undefined;

  constructor(private userservice:UserserviceService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllMerchants();
  }

  private getAllMerchants(){
    this.userservice.getAllMerchants().subscribe(data => {
      this.user = data;
    });
  }

  deleteMerchants(id: number){
    this.userservice.deleteMerchants(id).subscribe( data => {
      console.log(data);
      this.getAllMerchants();
    })
  }

}
