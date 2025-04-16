import { Component } from '@angular/core';
import { isReactive } from '@angular/core/primitives/signals';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-db',
  standalone: false,
  templateUrl: './db.component.html',
  styleUrl: './db.component.css'
})
export class DbComponent {
  dbForm: FormGroup;
  constructor(private formBuider: FormBuilder){
    this.dbForm = this.formBuider.group({"userNames" : this.formBuider.array([]), "group": new FormControl('', Validators.required)});
    if(localStorage.getItem('isReactive') != null)
    {
      localStorage.removeItem('isReactive');
      var size: number = Number.parseInt(JSON.parse(localStorage.getItem('amount') || "{}")['amount']);
      this.dbForm.controls['group'] = new FormControl(JSON.parse(localStorage.getItem('group') || '{}')['group']);
      for(let i = 0; i < size; i++)
      {
        (<FormArray>this.dbForm.controls['userNames']).push(new FormControl(JSON.parse(localStorage.getItem('user ' + i) || '{}')['name'], Validators.required));
      }
    }
    else{
      var size: number = Number.parseInt(JSON.parse(localStorage.getItem('amount temp') || "{}")['amount']);
      this.dbForm.controls['group'] = new FormControl(JSON.parse(localStorage.getItem('group temp') || '{}')['group']);
      for(let i = 0; i < size; i++)
      {
        (<FormArray>this.dbForm.controls['userNames']).push(new FormControl(JSON.parse(localStorage.getItem('user temp ' + i) || '{}')['name'], Validators.required));
      }
    }

  }
  getUsers(){
    return this.dbForm.controls['userNames'] as FormArray;
  }
  getGroup(): String{
    return this.dbForm.controls['group'].value;
  }
}
