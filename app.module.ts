import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import {DataService} from './data.service';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { GammaComponent } from './gamma/gamma.component'; // <-- Import HttpModule
import {NumbersService} from './numbers.service';
import {GoldService} from './Gold.service';


@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent,
    GammaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule
  ],
  providers: [DataService,NumbersService,GoldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
