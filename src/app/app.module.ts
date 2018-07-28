import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileSelectComponent } from './file-select/file-select.component';
import { FileInfoComponent } from './file-info/file-info.component';
import { FileDetailComponent } from './file-detail/file-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FileSelectComponent,
    FileInfoComponent,
    FileDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
