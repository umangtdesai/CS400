import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-child-display',
  templateUrl: './child-display.component.html',
  styleUrls: ['./child-display.component.css']
})
export class ChildDisplayComponent implements OnInit {

  @Input() artists: any;

  constructor() { }

  ngOnInit() {
  }

}
