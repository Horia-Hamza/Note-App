import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthNotesService } from '../auth-notes.service';
import { AuthService } from '../auth.service';
import { AddNote } from './../add-note';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  notes : any[] = []

  constructor(
    private _AuthNotesService: AuthNotesService,
    private _AuthService: AuthService
  ) {}

  unDecodedData = localStorage.getItem('userToken');
  userToken: string = this._AuthService.userData._value;
  userId: string = this._AuthService.userData._value._id;

  addNoteForm: FormGroup = new FormGroup({
    title: new FormControl(null),
    desc: new FormControl(null),
  });


  submitAddNote() {
    let addNoteObj: object = {
      title: this.addNoteForm.value.title,
      desc: this.addNoteForm.value.desc,
      citizenID: this.userId,
      token: this.unDecodedData,
    };
    // console.log(addNoteObj);

    this._AuthNotesService.addNote(addNoteObj).subscribe((res) => {
      // console.log(res);
    });
  }

  displayNote() {
    let getNoteObj: object = {
      citizenID: this.userId,
      token: this.unDecodedData,
    };
    // console.log(getNoteObj);

    this._AuthNotesService.getNote(getNoteObj).subscribe((res) => {
      this.notes = res.Notes
      console.log(res);
      
    });
  }

  ngOnInit(): void {
    this.displayNote();
  }
}
