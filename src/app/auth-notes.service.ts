import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthNotesService {
addNoteUrl:string='https://routeegypt.herokuapp.com/'

  constructor(private _HttpClient:HttpClient) { }

  addNote(noteDate:object):Observable<any>{
    return this._HttpClient.post(this.addNoteUrl+'addNote',noteDate)
  }


  getNote(noteDate:object):Observable<any>{
    return this._HttpClient.post(this.addNoteUrl+'getUserNotes',noteDate)
  }

}
