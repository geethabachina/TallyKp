import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DashboardService } from '../services/dashboard.service';
import { ModalServiceService } from '../shared/services/modal-service/modal-service.service';


@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  refresh: Subscription;
  refresh1: Subscription;
  btnType: any;

  constructor(
    private router: Router,
    private dashboardService : DashboardService,
    private modalService2: ModalServiceService,
  ) {
    this.refresh = this.dashboardService.refreshListBtnBg$.subscribe(() => {
      var element1 = document.getElementById("list");
      element1?.classList.add("bg-color-blue");
      var element2 = document.getElementById("add");
      element2?.classList.remove("bg-color-blue");
    });
    this.refresh1 = this.dashboardService.refreshAddBtnBg$.subscribe(() => {
      var element1 = document.getElementById("list");
      element1?.classList.remove("bg-color-blue");
      var element2 = document.getElementById("add");
      element2?.classList.add("bg-color-blue");
    });
   }

  ngOnInit(): void {
    this.btnType = localStorage.getItem('btnType');
  }

  logout(){
    var data = {btn:this.btnType}
    this.modalService2.openModal('logout', data);
  }

  listView(){
    var btnType = localStorage.getItem('btnType');
    // this.router.navigate(['/core/wpApprove']);
    this.router.navigate(['/core/wpApprove'], { queryParams: { btn:btnType }});
    var element1 = document.getElementById("list");
    element1?.classList.add("bg-color-blue");
    var element2 = document.getElementById("add");
    element2?.classList.remove("bg-color-blue");
  }

  addView(){
    var btnType = localStorage.getItem('btnType');
    // this.router.navigate(['/core/wpImport']);
    this.router.navigate(['/core/wpImport'], { queryParams: { mode:'add',btn:btnType }});
    var element1 = document.getElementById("list");
    element1?.classList.remove("bg-color-blue");
    var element2 = document.getElementById("add");
    element2?.classList.add("bg-color-blue");
  }

  ngOnDestroy(){
    this.refresh.unsubscribe();
    this.refresh1.unsubscribe();
  }

}
