import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.css']
})
export class SelectOptionComponent implements OnInit {
  loginForm: FormGroup;
  username: any = '';
  submitted: any = false;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    )
    {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });
   }

  ngOnInit() {}


  onSubmit() {
    this.submitted = true;
    if(this.loginForm.invalid){
      for (var i in this.loginForm.controls) {
        this.loginForm.controls[i].markAsTouched();
      }
      return;
    }
  //  this.router.navigate(['core/selectOption']);
    this.router.navigate(['selectOption']);
  }

  btnClick(btnName:any){
    // this.router.navigate(['core/import'], { queryParams: { btn:btnName }});
    // this.router.navigate(['import'], { queryParams: { btn:btnName }});
    this.router.navigate(['core/wpApprove'], { queryParams: { btn:btnName }});
  }





}
