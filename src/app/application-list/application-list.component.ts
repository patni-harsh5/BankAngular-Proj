import { Component, OnInit, Input, Output  } from '@angular/core';
import { Application } from '../application';
import { DBConnect } from '../shared/dbConnect.service';
import { EventEmitter } from 'events';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  // @Output() selectedApplication1 = new EventEmitter<Application>();

  @Input() selectedApplication:Application;
  loadedPosts : any[] = [];

  constructor(private db:DBConnect, private router: Router) { }

  

  ngOnInit() {

  }

  ApplicationForm(){
    this.router.navigateByUrl("/cardapp");
  }

  ViewApplication(){
    this.router.navigateByUrl("/appList");
  }

  loadApplications(ssn:string) {
    
    this.db.getAppsBySSN(ssn).subscribe(posts=>{this.loadedPosts = posts});
      
    console.log(this.loadedPosts);
  }

  // onSelected(app: Application){
  //   this.selectedApplication1.emit(app);

  // }

}
