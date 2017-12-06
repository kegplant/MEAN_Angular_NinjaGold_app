import {
  Component
} from '@angular/core';
import {User} from './user';
import{GoldService} from'./Gold.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private _GoldService:GoldService){}
  golds=this._GoldService.golds;
locations=[
  {name:'Farm',min:'2',max:'5'},
  {name:'Cave',min:'5',max:'10'},
  {name:'Casino',min:'-100',max:'100'},
  {name:'House',min:'7',max:'15'},
  // {name:'',min:'',max:''},
]


}
