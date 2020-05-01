import { Component } from '@angular/core';
import {repeat} from "rxjs/operators";
import {ArtistGeneratorService} from "./services/artist-generator.service";
import {FormControl, FormBuilder, FormGroup, Form, Validators} from "@angular/forms";
import {Validator} from "@angular/forms/src/directives/validators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CS 400 PS7: Music Lyrics Finder';
  artists: any;

  getResult(artist_list) {
    this.artists = artist_list;
    console.log(this.artists);

  }


  constructor(private wx: ArtistGeneratorService, private form: FormBuilder) {
  }



}
