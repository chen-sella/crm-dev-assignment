import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AvatarModule } from 'ngx-avatar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './cmps/main-header/main-header.component';
import { MainMenuComponent } from './cmps/main-menu/main-menu.component';
import { CRMAppComponent } from './pages/crm-app/crm-app.component';
import { CrmHeaderComponent } from './cmps/crm-header/crm-header.component';
import { SortByComponent } from './cmps/sort-by/sort-by.component';
import { CandidateListComponent } from './cmps/candidate-list/candidate-list.component';
import { CandidatePreviewComponent } from './cmps/candidate-preview/candidate-preview.component';
import { SearchBarComponent } from './cmps/search-bar/search-bar.component';
import { AlertModule } from './modules/alert/alert.module';
@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainMenuComponent,
    CRMAppComponent,
    CrmHeaderComponent,
    SortByComponent,
    CandidateListComponent,
    CandidatePreviewComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AvatarModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
