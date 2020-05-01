import { Component } from '@angular/core';


import {SONGS} from "./SONGS-MOCK";
import {SONG} from './SONGS'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CS 400 PS6';
  songs = SONGS;
  private selectedSong: SONG;

  selectSong(song: SONG) {
    this.selectedSong = song;

  }
}
