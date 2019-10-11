import { Component, OnInit,Input } from '@angular/core';
import { Application } from '../../application';

@Component({
  selector: 'app-application-item',
  templateUrl: './application-item.component.html',
  styleUrls: ['./application-item.component.css']
})
export class ApplicationItemComponent implements OnInit {

  @Input() app:Application;



  constructor() { }

  ngOnInit() {
  }

}
