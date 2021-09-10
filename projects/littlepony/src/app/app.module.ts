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
import { HttpClientModule } from '@angular/common/http';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";


const ROUTES: Routes =[
  {path:'', component: PoniesComponent},
  {path:'races', component: RacesComponent},
  {path:'add-pony', component: AddPonyReactComponent},
  {path:'update-pony/:id', component: AddPonyComponent},
  {path:'add-race', component: AddRaceComponent},
  {path:'update-race/:id', component: AddRaceComponent},
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
    AddPonyReactComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule.forRoot(ROUTES),
        ReactiveFormsModule,
        HttpClientModule,
        ButtonModule,
        InputTextModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
