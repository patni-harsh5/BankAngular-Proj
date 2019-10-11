import { Component, OnInit, Input } from '@angular/core';
import { DBConnect } from '../shared/dbConnect.service';
import  { NgForm } from '@angular/forms';
import { CardMember } from '../cardmembers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardapplication',
  templateUrl: './cardapplication.component.html',
  styleUrls: ['./cardapplication.component.css']
})
export class CardapplicationComponent implements OnInit {

  @Input() users: CardMember;
  
  cardApptoDB(nf: NgForm) {
    console.log("in cardApp DB");
    console.log(nf.value);

    this.db.cardApptoDB(nf.value);
  }

  ApplicationForm(){
    this.router.navigateByUrl("/cardapp");
  }

  ViewApplication(){
    this.router.navigateByUrl("/appList");
  }

  constructor(private db: DBConnect, private router: Router) { }

  ngOnInit() {
  }

}
