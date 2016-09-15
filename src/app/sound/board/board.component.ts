import {Component, OnInit} from '@angular/core';
import {NoteService} from '../services/note.service';
import {AudioService} from '../services/audio.service';
import {SynthService} from '../services/synth.service';
import {HostListener} from '@angular/core/src/metadata/directives';
import {Note} from "../note/note";

@Component({
  selector: 'synth-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [AudioService, AudioContext, NoteService, SynthService]
})
export class BoardComponent implements OnInit {
  notes: Note[];
  private date;
  private time;
  private value: string;

  constructor(private audioService: AudioService,
  private noteService: NoteService,
  private synthService: SynthService) { }

  audioContext = this.audioService.audioContext;

  ngOnInit() {
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes);
  }

  @HostListener('^onmousedown', ['$event.target.value'])
  play(note: Note){
    var freq = this.noteToFrequency(note.num).toFixed(3);
    this.value = freq;
    this.date = new Date();
    this.time = this.date;
    this.synthService.play(freq,this.time);
  }
  @HostListener('^mouseup', ['$event.target.value'])
  release(note){
    //var freq = this.noteToFrequency(note.num).toFixed(3);
    var freq = this.value;
    this.date = new Date();
    this.time = this.date;
    this.synthService.stop(freq,this.time);
  }

  noteToFrequency = function(note) {
    return Math.pow(2, (note - 69) / 12) * 440.0;
  };


}
