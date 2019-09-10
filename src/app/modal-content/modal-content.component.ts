import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {
  user: any;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
  passBack(){
    this.activeModal.close(this.user);
  }

}


