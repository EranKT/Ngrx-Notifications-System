import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NotificationsModel } from '../models/notifications.model';
import { userNotificationsMock } from '../mocks/user-notifications-mock';

@Injectable({
  providedIn: 'root',
})
export class UserNotificationsService {
  userNotificationsMock = userNotificationsMock;

  constructor() { }

  getNotifications(): Observable<NotificationsModel[]> {
    return of(this.userNotificationsMock);
  }

  updateNotificationById(id: string): Observable<string> {
    return of(id);
  }
}
