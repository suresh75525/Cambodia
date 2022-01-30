import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormBuilder,FormGroup,FormArray} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public firstname!:string;
  public lastname!:string;
  public gender!:string;
  public email!:string;
  public password!:string;
  public country!:string;
 public hobby!:string;
  public textarea!:string;
  public isSubmit!:boolean;

  hide = true;
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = fb.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false
     
    });
    this.isSubmit = false;
  }

  ngOnInit(): void {
    this.userForm=new FormGroup({
      'firstname':new FormControl('',Validators.required),
      'lastname':new FormControl('',Validators.required),
      'gender':new FormControl('',Validators.required),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'password':new FormControl('',Validators.required),
      'country':new FormControl('',Validators.required),
    //  'isArray':this.fb.array([],[Validators.required]),
    
     'hobby':new FormArray([
        new FormGroup({
           'Watching Tv': new FormControl(false)
        }),
        new FormGroup({
          'Cricket':new FormControl(false)
        })
      ]),
      'textarea':new FormControl('',Validators.required)
    });
  }
  
  register()
  {
    this.isSubmit = true;
    this.userForm.value;
  }
  back() {
    this.userForm.reset('');
    this.isSubmit = false;
  }
 
}


