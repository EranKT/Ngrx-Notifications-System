export class NotificationsModel {
  id: string = '';
  summary: string = '';
  new: boolean = false;

  constructor(copy?:Partial<NotificationsModel>) {
    Object.assign(this, copy)
  }

}
