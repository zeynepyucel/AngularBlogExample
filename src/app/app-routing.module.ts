import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
// @ts-ignore
import { HeroesComponent } from './heroes/heroes.component';
import {HomepageComponent} from "./homepage/homepage.component";
import {CardComponent} from "./card/card.component";

const routes: Routes = [
  { path:'', component: HomepageComponent },
  { path:'card', component: CardComponent }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
