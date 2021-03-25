import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { SearchComponent } from './search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';

import { Angular2CsvModule } from 'angular2-csv';
import { NgxCsvParserModule } from 'ngx-csv-parser';

import { CommonModule } from '@angular/common';
import { KeysPipe } from './search/customPipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ViewDataComponent,
    SearchComponent,
    RegisterComponent,
    KeysPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    Angular2CsvModule,
    NgxCsvParserModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [RegisterComponent],
  bootstrap: [AppComponent],
  entryComponents: [RegisterComponent],
})
export class AppModule {}
