import { Component, OnInit, Input } from '@angular/core';
import { CardMember } from "../cardmembers";
import  { NgForm } from '@angular/forms';
import { DBConnect } from '../shared/dbConnect.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() users :CardMember;


  registerToDB(nf: NgForm){
    console.log("in regDB!");
    console.log(nf.value);
    this.db.registerToDB(nf.value);

    this.router.navigateByUrl("/cardapp");
  }
  constructor(private db: DBConnect, private router: Router) { }
  // constructor() { }

  ngOnInit() {
  }

}
