import { NotificationsModel } from "../../models/notifications.model";

export class NotificationsState {
  notifications: NotificationsModel[] = [];
  notificationId: string = '0';
}
