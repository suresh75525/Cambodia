import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  gmail!:string;
  error!:string;
  feedback!:string;
  form1!:FormGroup;


  
  constructor() { }

  ngOnInit(): void 
  {
    this.form1=new FormGroup({
      'gmail':new FormControl('',[Validators.required,Validators.email]),
      'feedback':new FormControl('')      
    })
  }
  submit()
  {
   this.gmail=this.form1.value.gmail;
   this.feedback=this.form1.value.feedback;
   this.form1.reset('');

  }

}
