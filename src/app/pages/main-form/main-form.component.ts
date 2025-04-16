import { Component, Output, EventEmitter} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-form',
  standalone: false,
  templateUrl: './main-form.component.html',
  styleUrl: './main-form.component.css'
})
export class MainFormComponent {
  @Output() messageEvent = new EventEmitter<FormGroup>();
  myForm;
  constructor(private build: FormBuilder, private router: Router){
    this.myForm = this.build.group({"userNames": this.build.array([new FormControl('', Validators.required)]), 
      "group": new FormControl('', Validators.required)});
  }
  onSubmit(){
    localStorage.setItem('isReactive', JSON.stringify({state: true}));
    if(localStorage.getItem('amount') != null)
    {
      var size: number = Number.parseInt(JSON.parse(localStorage.getItem('amount') || "{}")['amount']);
      for(let i = 0; i < size; i++)
        {
          localStorage.removeItem('user ' + i);
        }
      localStorage.removeItem('amount');
      localStorage.removeItem('group');
  }
  var amount:number = this.myForm.controls['userNames'].controls.length;
    localStorage.setItem('amount', JSON.stringify({amount: amount}));
    localStorage.setItem('group', JSON.stringify({group: this.myForm.controls['group'].value}));
    for(let i = 0; i < amount; i++)
    {
      localStorage.setItem('user ' + i, JSON.stringify({name: this.myForm.controls['userNames'].controls[i].value}));
    }
    this.router.navigate(['/db']);
  }
  addUser()
  {
    (<FormArray>this.myForm.controls['userNames']).push(new FormControl('', Validators.required));
  }
  getFormsControls(): FormArray{
    return this.myForm.controls['userNames'] as FormArray;
  }
}

