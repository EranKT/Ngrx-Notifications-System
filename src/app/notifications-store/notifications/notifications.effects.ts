import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, exhaustMap, delay, takeWhile, tap } from 'rxjs/operators';
import { UserNotificationsService } from '../../services/user-notifications.service';
import { NotificationsActions } from './notifications.actions';

@Injectable()
export class NotificationsEffects {
  private shouldAutoUpdate = true;


  loadNotifications$ = createEffect((): any => this.actions$.pipe(
    ofType(NotificationsActions.GetNotificationsAction),
    map(() => this.shouldAutoUpdate = true),
    exhaustMap(() => this.userNotificationsService.getNotifications().pipe(
      map(notifications => NotificationsActions.GetNotificationsSuccessAction({ notifications })),
      catchError(error => of(NotificationsActions.GetNotificationsFailureAction({ error })))
    ))
  ));

  // auto get data from server
  autoUpdateNotifications$ = createEffect((): any => this.actions$.pipe(
    ofType(
      NotificationsActions.GetNotificationsSuccessAction,
      NotificationsActions.GetNotificationsFailureAction
    ),
    delay(2000),
    takeWhile(() => this.shouldAutoUpdate),
    exhaustMap(() => this.userNotificationsService.getNotifications().pipe(
      map(notifications => NotificationsActions.GetNotificationsSuccessAction({ notifications })),
      catchError(error => of(NotificationsActions.GetNotificationsFailureAction({ error })))
    ))
  ));

  // stop auto get data from server
  stopAutoUpdateNotifications$ = createEffect((): any => this.actions$.pipe(
    ofType(NotificationsActions.StopNotificationsRefreshAction),
    map(() => this.shouldAutoUpdate = false)
  ), { dispatch: false });

  updateNotificationById$ = createEffect((): any => this.actions$.pipe(
    ofType(NotificationsActions.UpdateNotificationByIdAction),
    exhaustMap(id => this.userNotificationsService.updateNotificationById(id.notificationId).pipe(
      map(id => NotificationsActions.UpdateNotificationByIdActionSuccess({ notificationId: id })),
      catchError(error => of(NotificationsActions.GetNotificationsFailureAction({ error })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private userNotificationsService: UserNotificationsService
  ) { }
}
