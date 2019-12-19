import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { TagsService } from './tags/tags.service';
import { CollectionsService } from './collections/collections.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule
  ],
  providers: [
    TagsService,
    CollectionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
