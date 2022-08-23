import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CardsComponent } from './cards/cards.component';
import { CardComponent } from './card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import { NgxPaginationModule } from "ngx-pagination";
import { MatPaginatorModule } from "@angular/material/paginator";
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CardsComponent,
    CardComponent,
  ],
    imports: [
        BrowserModule,
        NgbModule,
        HttpClientModule,
        NgxPaginationModule,
        BrowserAnimationsModule,
        MatPaginatorModule,
        AppRoutingModule,
        RouterModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
