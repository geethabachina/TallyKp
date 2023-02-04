import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-wp-import',
  templateUrl: './add-wp-import.component.html',
  styleUrls: ['./add-wp-import.component.css']
})
export class AddWpImportComponent implements OnInit {
  importForm: FormGroup;
  scn: any = null;
  hatchNo: any = null;
  fromBtn: any;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) {
      this.importForm = this.formBuilder.group({
        // scn: ['', Validators.required],
        // hatchNo: ['', Validators.required]
        scn: [null],
        hatchNo: [null]
    });
     }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // debugger
      this.fromBtn = params['btn'];
    })
  }

  reset(){
    // have to clear all fields data
    this.scn = null;
    this.hatchNo = null;
  }

  
  save(){
    this.toastr.success('', 'Saved successfully');
    this.router.navigate(['wpApprove']);
  }

}

