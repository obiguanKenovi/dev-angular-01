import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: [ './nopagefound.component.css'
  ]
})
export class NopagefoundComponent implements OnInit {

  public _year= new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
