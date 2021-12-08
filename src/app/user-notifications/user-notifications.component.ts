import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NotificationsModel } from '../models/notifications.model';
import { NotificationsStore } from '../notifications-store/notifications-store';
import { NotificationsActions } from '../notifications-store/notifications/notifications.actions';
import { notificationsSelector } from '../notifications-store/notifications/notifications.selectors';

@Component({
  selector: 'app-user-notifications',
  templateUrl: './user-notifications.component.html',
  styleUrls: ['./user-notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserNotificationsComponent implements OnInit {

  notifications$: Observable<NotificationsModel[]> = this.store.select(notificationsSelector);

  constructor(private store: Store<NotificationsStore>) { }

  ngOnInit(): void {
    this.store.dispatch(NotificationsActions.GetNotificationsAction());
  }

  getNotificationsClass(isNew: boolean): string {
    return (isNew ? 'notification-container-new' : 'notification-container')
  }

  messageRead(id: string) {
    this.store.dispatch(NotificationsActions.UpdateNotificationByIdAction({ notificationId: id }));
  }

  stopRefresh() {
    this.store.dispatch(NotificationsActions.StopNotificationsRefreshAction());
  }

}
