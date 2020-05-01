import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ArtistGeneratorService} from "../services/artist-generator.service";

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css']
})
export class ChildFormComponent implements OnInit {

  artists: any;
  artist_name: FormControl = new FormControl('');
  getAllArtist: FormGroup;

  @Output() sendingResult: EventEmitter<any> = new EventEmitter<any>();

  getArtist() {
    let userArtistChoice = this.getAllArtist.get('artist_name').value;

    if (userArtistChoice.length != 0) {

      this.wx.getArtist(userArtistChoice).subscribe(
        response => {
          // console.log(this.getAllArtist);
          this.artists = response['message']['body']['artist_list'];
          // this.lyrics = response['message']['body']['lyrics']['lyrics_body'];
          this.sendingResult.emit(this.artists)
        }
      )
    }

  }


  constructor(private wx: ArtistGeneratorService, private form: FormBuilder) {
    this.getAllArtist = this.form.group({artist_name: this.artist_name
    })
  }

  ngOnInit() {
  }

}
