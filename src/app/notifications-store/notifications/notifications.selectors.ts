import { createFeatureSelector, createSelector } from "@ngrx/store";
import { NotificationsState } from "./notifications.state";

const notificationsStateFeatureSelector = createFeatureSelector<NotificationsState>('notifications');

export const notificationsSelector = createSelector(notificationsStateFeatureSelector, ({ notifications }) => notifications);
