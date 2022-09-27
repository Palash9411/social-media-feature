import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb : FormBuilder) { }

  public myFriendForm: FormGroup =this.fb.group({}); 

  ngOnInit(): void {
    this.myFriendForm = this.fb.group({
      name : ['Palash',Validators.required] ,
      marks : new FormArray([ this.fb.control(45),this.fb.control(45),this.fb.control(45)])
  })
}
get marks(){
  return  this.myFriendForm.get('marks') as FormArray;
}
}
