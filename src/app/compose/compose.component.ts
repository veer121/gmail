import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent implements OnInit {

    // this is a variable
    partView = 'more';
    // this is a functino to change the view variable
    changePartView(des) {
      this.partView = des;
    }

    view='';
    changeView(de){
      this.view=de;
    };

  constructor() { }

  ngOnInit(): void {
  }

}
