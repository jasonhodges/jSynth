import {Component, OnInit} from '@angular/core';
import {AudioService} from './services/audio.service';


@Component({
  selector: 'app-sound',
  templateUrl: 'sound.component.html',
  styleUrls: ['sound.component.css'],
  providers: [
    AudioService
  ]
})

export class SoundComponent implements OnInit {
  title = 'jSynth';

  constructor() { }

  ngOnInit() { }

}
