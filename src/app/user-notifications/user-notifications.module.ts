import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNotificationsComponent } from './user-notifications.component';
import { NotificationsStoreModule } from '../notifications-store/notifications-store.module';
import { DesignLibModule } from 'design-lib';

@NgModule({
  declarations: [UserNotificationsComponent],
  exports: [UserNotificationsComponent],
  imports: [
    CommonModule,
    NotificationsStoreModule
  ],
})
export class UserNotificationsModule { }
