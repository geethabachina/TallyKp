import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {
  importForm: FormGroup;
  siid: any = null;
  hatchNo: any = null;
  fromBtn: any;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,) {
      this.importForm = this.formBuilder.group({
        // siid: ['', Validators.required],
        // hatchNo: ['', Validators.required]
        siid: [null],
        hatchNo: [null]
    });
     }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      debugger
      this.fromBtn = params['btn'];
    })
  }



  reset(){
    // have to clear all fields data
    this.siid = null;
    this.hatchNo = null;
  }

}
