import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoniesComponent } from './ponies/ponies.component';
import { RacesComponent } from './races/races.component';
import { PonyDetailComponent } from './pony-detail/pony-detail.component';
import { RaceDetailComponent } from './race-detail/race-detail.component';
import { LocationRacePipe } from './location-race.pipe';
import { AddPonyComponent } from './add-pony/add-pony.component';
import { MenuComponent } from './menu/menu.component';
import { AddRaceComponent } from './add-race/add-race.component';
import { AddPonyReactComponent } from './add-pony-react/add-pony-react.component';
import { AddRaceReactComponent } from './add-race-react/add-race-react.component';

const ROUTES: Routes =[
  {path:'', component: PoniesComponent},
  {path:'races', component: RacesComponent},
  {path:'add-pony', component: AddPonyComponent},
  {path:'add-race', component: AddRaceComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PoniesComponent,
    RacesComponent,
    PonyDetailComponent,
    RaceDetailComponent,
    LocationRacePipe,
    AddPonyComponent,
    MenuComponent,
    AddRaceComponent,
    AddPonyReactComponent,
    AddRaceReactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
