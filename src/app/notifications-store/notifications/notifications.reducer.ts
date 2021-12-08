import { Action, createReducer, on } from '@ngrx/store';
import { NotificationsActions } from './notifications.actions';
import { NotificationsState } from './notifications.state';

const reducer = createReducer(
  new NotificationsState(),
  on(NotificationsActions.GetNotificationsSuccessAction, (state, { notifications }) => ({ ...state, notifications })),
  on(NotificationsActions.UpdateNotificationByIdActionSuccess, (state, { notificationId }) => ({
    ...state,
    notificationId,
    notifications: state.notifications.map(notification => ({ ...notification }))
      .map(notification => {
        if (notification.id === notificationId) {
          return {
            ...notification,
            new: false,
          }
        } else {
          return notification;
        }
      }
      )
  }))
);

export function notificationsReducer(state: NotificationsState, action: Action): NotificationsState {
  return reducer(state, action);
}
