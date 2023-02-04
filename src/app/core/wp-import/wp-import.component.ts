import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-wp-import',
  templateUrl: './wp-import.component.html',
  styleUrls: ['./wp-import.component.css']
})
export class WpImportComponent implements OnInit {
  importForm: FormGroup;
  scn: any = null;
  blNo: any = null;
  selectedData: any = {};
  mode: any;
  cargoName: any;
  quantity: any;
  pieces: any;
  hatch: any;
  lorryNo: any;
  location: any = null;
  containerNo: any;
  remarks: any;
  document: any = null;
  Weight: any;
  fromBtn: any;
  siid: any = null;
  data: any = [
    {id:'1',scn:'22OCFF',date:'14/12/2023',berthNo:'B04',shipName:'JASA MURNI'},
    {id:'2',scn:'22NCEP',date:'14/12/2023',berthNo:'B05',shipName:'JOSCO TAIZHOU'},
    {id:'3',scn:'22NCKQ',date:'14/12/2023',berthNo:'B04',shipName:'UNION LUCK'},
    {id:'4',scn:'22NCAF',date:'14/12/2023',berthNo:'B05',shipName:'BAO XIANG LING'},
    {id:'5',scn:'22OBHG',date:'14/12/2023',berthNo:'B04',shipName:'STRAITS CHALLENGER'}]
  data1: any = [
    {id:'1',cargoName:'BOAT (RR)',blNo:'NYKS200007092'},
    {id:'2',cargoName:'COIL (BB)',blNo:'103417LB105'},
    {id:'3',cargoName:'BEAM (BB)',blNo:'UL22366TJKEL02'},
    {id:'4',cargoName:'BEAM (BB)',blNo:'KLXG41'},
    {id:'5',cargoName:'HELICOPTER (RR)',blNo:'SC2206351I'}]

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private spinner : NgxSpinnerService,
    ) {
      this.importForm = this.formBuilder.group({
        // scn: ['', Validators.required],
        scn: [null],
        blNo: [null],
        quantity: [null],
        location: [null],
        lorryNo: [null],
       // scn: [null],
       // blNo: [null]
    });
     }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.mode = params['mode'];
      this.fromBtn = params['btn'];
      if(this.mode=='edit'){
        this.edit();
      }
    })
  }
 
  edit(){
    this.scn = "22OCFF" ;
    this.blNo = 'NYKS200007092' ;
    this.selectedData.date = '14/12/2023' ;
    this.selectedData.berthNo = 'B04' ;
    this.selectedData.tallyNo = 'A589106' ;
    this.selectedData.shipName = 'JASA MURNI' ;
    this.cargoName ='BOAT (RR)' ;
    this.quantity = '1' ;
    this.pieces = '10' ;
    this.hatch = '1' ;
    this.location = 'YARD 9 - ZONE 1' ;
    this.lorryNo = 'VCA123' ;
    this.containerNo = '' ;
    this.remarks = '' ;
    this.siid = null;
  }

  scnChanged(scn:any){
    var index = _.findIndex(this.data, (row:any) => {
      return row.scn == scn;
    });
    if(index > -1) {
      this.selectedData = this.data[index];
    }
    else{
      this.selectedData = {};
    }
  }

  blNoChanged(blNo:any){
    var index = _.findIndex(this.data1, (row:any) => {
      return row.blNo == blNo;
    });
    if(index > -1) {
      this.cargoName = this.data1[index].cargoName;
    }
    else{
      this.cargoName = '';
    }
  }

  save(){
    //this.submitTouched = true;
    // if(this.newGroup.type == 'Job Order'){
    //   this.addGroupForm.controls['user'].setValidators([Validators.required]);
    //   this.addGroupForm.controls['user'].updateValueAndValidity();
    // }
    // else{
    //   this.addGroupForm.controls['user'].clearValidators();
    //   this.addGroupForm.controls['user'].updateValueAndValidity();
    // }
    if(!this.importForm.valid){
      for (var i in this.importForm.controls) {
        this.importForm.controls[i].markAsTouched();
      }
      //this.submitTouched = false;
      return false;
    }
    //this.spinner.show();
    this.toastr.success('', 'Saved successfully');
    this.router.navigate(['wpApprove'], { queryParams: { btn:this.fromBtn }});
  }

  reset(){
    this.scn = null;
    this.blNo = null;
    this.selectedData = {};
  }

  back(){
    this.router.navigate(['wpApprove'], { queryParams: { btn:this.fromBtn }});
  }


}

