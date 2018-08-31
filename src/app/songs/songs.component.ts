import { Component, OnInit } from '@angular/core';
import { Song } from '../../entity/song';
import { Type } from '../../entity/genre';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  song: Song;
  genre: Type;

  constructor() { }

  ngOnInit() {
  }

}
