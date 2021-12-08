import { createAction, props } from '@ngrx/store';
import { NotificationsModel } from '../../models/notifications.model';

export const NotificationsActions = {
  GetNotificationsAction: createAction('[Notifications] Get Notifications'),
  GetNotificationsSuccessAction: createAction('[Notifications] Get Notifications Success', props<{ notifications: NotificationsModel[] }>()),
  GetNotificationsFailureAction: createAction('[Notifications] Get Notifications Failure', props<{ error: Error }>()),
  StopNotificationsRefreshAction: createAction('[Notifications] Stop  Notifications Refresh'),
  UpdateNotificationByIdAction: createAction('[Notifications] Update Notification By Id', props<{ notificationId: string }>()),
  UpdateNotificationByIdActionSuccess: createAction('[Notifications] Update Notification By Id Success', props<{ notificationId: string }>()),
  UpdateNotificationByIdFailure: createAction('[Notifications] Update Notification By Id Failure', props<{ notificationId: string }>()),
}
