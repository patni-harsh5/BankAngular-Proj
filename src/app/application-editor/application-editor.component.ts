import { Component, OnInit, Input } from '@angular/core';
import { Application } from '../application';

@Component({
  selector: 'app-application-editor',
  templateUrl: './application-editor.component.html',
  styleUrls: ['./application-editor.component.css']
})
export class ApplicationEditorComponent implements OnInit {

  @Input() selectedApp: Application;

  constructor() { }

  ngOnInit() {
  }

}
