import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {CarouselModule} from 'primeng/carousel';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ChartModule} from 'primeng/chart';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,

  ],
  imports: [
    BrowserModule,
    ButtonModule,
    AppRoutingModule,
    TabViewModule,
    CarouselModule,
    ContextMenuModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
