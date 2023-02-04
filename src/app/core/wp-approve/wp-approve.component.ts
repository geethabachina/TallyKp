import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-wp-approve',
  templateUrl: './wp-approve.component.html',
  styleUrls: ['./wp-approve.component.css']
})
export class WpApproveComponent implements OnInit {
  importForm: FormGroup;
  scn: any = null;
  hatchNo: any = null;
  fromBtn: any;
  searchValue: any;
  data: any = [
    {id:'1',tallyNo:'A589106',date:'14/12/2023',lorryNo:'VCA123'},
    {id:'2',tallyNo:'D589107',date:'14/12/2023',lorryNo:'CCA123'},
    {id:'3',tallyNo:'B589106',date:'14/12/2023',lorryNo:'BCA123'},
    {id:'4',tallyNo:'B589107',date:'14/12/2023',lorryNo:'ABC7321'},
    {id:'5',tallyNo:'C591982',date:'14/12/2023',lorryNo:'CEF7321'},
    {id:'6',tallyNo:'B389106',date:'14/12/2023',lorryNo:'BCA123'},
    {id:'7',tallyNo:'B586107',date:'14/12/2023',lorryNo:'ABC7321'},
    {id:'8',tallyNo:'C491982',date:'14/12/2023',lorryNo:'CHF7321'},
    {id:'9',tallyNo:'B585107',date:'14/12/2023',lorryNo:'AGC7321'},
    {id:'10',tallyNo:'C581982',date:'14/12/2023',lorryNo:'CJF7321'},
  ]

  originalData: any = [
    {id:'1',tallyNo:'A589106',date:'14/12/2023',lorryNo:'VCA123'},
    {id:'2',tallyNo:'D589107',date:'14/12/2023',lorryNo:'CCA123'},
    {id:'3',tallyNo:'B589106',date:'14/12/2023',lorryNo:'BCA123'},
    {id:'4',tallyNo:'B589107',date:'14/12/2023',lorryNo:'ABC7321'},
    {id:'5',tallyNo:'C591982',date:'14/12/2023',lorryNo:'CEF7321'},
    {id:'6',tallyNo:'B389106',date:'14/12/2023',lorryNo:'BCA123'},
    {id:'7',tallyNo:'B586107',date:'14/12/2023',lorryNo:'ABC7321'},
    {id:'8',tallyNo:'C491982',date:'14/12/2023',lorryNo:'CHF7321'},
    {id:'9',tallyNo:'B585107',date:'14/12/2023',lorryNo:'AGC7321'},
    {id:'10',tallyNo:'C581982',date:'14/12/2023',lorryNo:'CJF7321'},
  ]
    

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,) {
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

  edit(){
    this.router.navigate(['wpImport'], { queryParams: { mode:'edit',btn:this.fromBtn }});
  }

  add(){
    this.router.navigate(['wpImport'], { queryParams: { mode:'add',btn:this.fromBtn }});
  }

  reset(){
    // have to clear all fields data
    this.scn = null;
    this.hatchNo = null;
  }

  // search(){
  //   if(this.searchValue){
  //     var arr = this.originalData.filter((item:any) => (item.tallyNo==this.searchValue || item.lorryNo==this.searchValue));
  //     this.data = arr;
  //   }
  //   else{
  //     this.data = _.cloneDeep(this.originalData);
  //   }
  // }

  search(){
    var searchResult = [];
    for(var i=0;i<=this.originalData.length-1;i++){
      if(this.originalData[i].tallyNo.toLowerCase().includes(this.searchValue.toLowerCase()) || this.originalData[i].lorryNo.toLowerCase().includes(this.searchValue.toLowerCase()) ){
        searchResult.push(this.originalData[i]);
      }
    }
    this.data = searchResult;
  }

  approve(id:any){
    var index = _.findIndex(this.data, (user:any) => {
      return id == user.id;
    });
    if(index > -1) {
      this.data.splice(index, 1);
    }
  }

  back(){
    
    this.router.navigate(['selectOption']);
  }

  
 

}

