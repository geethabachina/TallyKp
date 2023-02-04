import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-modal-pop-up',
  templateUrl: './modal-pop-up.component.html',
  styleUrls: ['./modal-pop-up.component.css']
})
export class ModalPopUpComponent implements OnInit {
title: any;
data: any;

  constructor(
    public modalRef: BsModalRef,
    private toastr: ToastrService,
    private router: Router,
    private dashboardService : DashboardService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.title=='LOG OUT'){
      this.modalRef.hide();
      this.router.navigate(['/logout']);
    }
    else{
      if(this.data.btn=='TS'){
        this.toastr.success('', 'Tally No "A589106" Saved successfully');
      }else if(this.data.btn=='CR'){
        this.toastr.success('', 'DO No "VH/0119" Saved successfully');
      }else{
        this.toastr.success('', 'TN No "TN016659" Saved successfully');
      }
      this.dashboardService.setListBtnBg();
      this.modalRef.hide();
      this.router.navigate(['/core/wpApprove'], { queryParams: { btn:this.data.btn}});
    }
  }



}
