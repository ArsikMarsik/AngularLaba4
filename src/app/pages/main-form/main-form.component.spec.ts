import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  @Output() formSubmit = new EventEmitter<any>();
  
 
  model = {
    name: '',
    email: '',
    age: null
  };

  onSubmit(form: any) {
    if (form.valid) {
      this.formSubmit.emit(this.model);
      form.resetForm();
    }
  }
}