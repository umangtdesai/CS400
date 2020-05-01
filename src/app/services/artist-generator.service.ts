import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {wxConfig as config} from "../config/wxConfig";
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArtistGeneratorService {

  getArtist(userArtistChoice) {
    const key = config.apiKey;
    const artist = userArtistChoice;
    //const songName = 'Cold Coffee'

    //&q_track=${songName}
    const url = `https://api.musixmatch.com/ws/1.1/artist.search?format=jsonp&callback=callback&q_artist=${artist}&&apikey=${key}`;

   // return this.http.get("https://api.openweathermap.org/data/2.5/onecall?lat=60.99&lon=30.9&appid=appid=e87f85ea3a569b706fa21cbbb4349e00&units=imperial");

    return this.http.jsonp(url, 'callback');

  }

  constructor(private http: HttpClient) { }
}
