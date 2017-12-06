import { Component, OnInit,Input } from '@angular/core';
import {GoldService} from '../Gold.service';
@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
// @Input() component;
  @Input() location;
  arr=[]
  constructor(private _GoldService:GoldService) { }
  
    ngOnInit() {
    }
    onClick(){
      console.log(this._GoldService.getGold(this.location.min,this.location.max,this.location));
    }

  
}
