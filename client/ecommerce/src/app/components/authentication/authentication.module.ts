import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthenticationService } from './authentication.service';

// @NgModule for SharedModule
@NgModule({
  declarations: [],
  imports: [],
  providers: [AuthenticationService],
  bootstrap: []
})
export class SharedModule {}