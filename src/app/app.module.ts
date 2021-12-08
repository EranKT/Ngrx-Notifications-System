import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { UserNotificationsComponent } from './user-notifications/user-notifications.component';
import { UserNotificationsModule } from './user-notifications/user-notifications.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 100
    }),
    UserNotificationsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
