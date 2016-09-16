import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Note} from '../note/note';
import {Observable} from 'rxjs/Observable'

@Injectable()
export class NoteService {

  constructor(private http: Http) { }

  private noteData = '../../../app/sound/services/notes.json';

  getNotes (): Observable<Note[]>{
    return this.http.get(this.noteData)
        .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  // getNotes() {
  //   return this.http.get(this.noteData)
  //     .map((res: Response) => res.json());
  // }
  // private extractData(res: Response) {
  //   let body = res.json();
  //   return body.data || { };
  // }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
