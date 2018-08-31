import { Component, OnInit } from '@angular/core';
import { Type } from '../../entity/genre';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  genres: Type [] = [{id:1,typename:"rnb"} , {id:1,typename:"rap"}]

  constructor() { }

  ngOnInit() {
  }

}
