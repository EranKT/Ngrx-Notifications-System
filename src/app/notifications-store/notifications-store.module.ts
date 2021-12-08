import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { notificationsReducer } from './notifications/notifications.reducer';
import { NotificationsEffects } from './notifications/notifications.effects';


@NgModule({
  imports: [
    StoreModule.forFeature('notifications', notificationsReducer),
    EffectsModule.forFeature([NotificationsEffects])
  ],
  exports: [StoreModule]
})
export class NotificationsStoreModule { }
