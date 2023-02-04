import { Injectable } from '@angular/core';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import * as _ from "lodash";
import { ModalPopUpComponent } from 'src/app/core/modal-pop-up/modal-pop-up.component';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {
  selectedComponent: any;
  selectedConfig: any;
  modalState: any;
  modalRef: any = BsModalRef;
  configMd: any = {
    backdrop: true,
    keyboard: true,
    ignoreBackdropClick: true,
    class: "modal-md",
  };

  constructor(
    public modalService: BsModalService,
  ) { }

  openModal(modalView:any, data2:any) {
    var data = _.cloneDeep(data2);
    this.selectedComponent = ModalPopUpComponent;
    this.selectedConfig = this.configMd;
    
    if (modalView == "save") {
      this.modalState = {
        data: data,
        //mode: "save",
        title: "SAVE",
      };
      this.selectedComponent = ModalPopUpComponent;
    }
    else if (modalView == "end") {
      this.modalState = {
        data: data,
        //mode: "end",
        title: "END"
      };
    } 
    else if (modalView == "update") {
      this.modalState = {
        data: data,
       // mode: "update",
        title: "UPDATE"
      };
    } 
    else if (modalView == "logout") {
      this.modalState = {
        data: data,
        //mode: "logout",
        title: "LOG OUT"
      };
    } 
    else {
      return;
    }
    this.selectedConfig.initialState = this.modalState;
    this.modalRef = this.modalService.show(
      this.selectedComponent,
      this.selectedConfig
    );
    return;
  }



}
