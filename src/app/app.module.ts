import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CreateComponent, CreateEventDialog } from './components/create/create.component';
import { MaterialModules } from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IndexComponent } from './components/index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    CreateEventDialog,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModules,
    FlexLayoutModule
  ],
  entryComponents: [
    CreateEventDialog,
    CreateComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
