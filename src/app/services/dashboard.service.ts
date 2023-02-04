import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class DashboardService {
  refreshListBtnBg$: EventEmitter<{}>;
  refreshAddBtnBg$: EventEmitter<{}>;


  constructor() {
    this.refreshListBtnBg$ = new EventEmitter();
    this.refreshAddBtnBg$ = new EventEmitter();
   }


   public setListBtnBg() {
    // localStorage.setItem("collapse-nav", val.toString());
    this.refreshListBtnBg$.emit();
  }
  public setAddBtnBg() {
    this.refreshAddBtnBg$.emit();
  }
}
