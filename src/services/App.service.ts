import BaseNotification from '$components/notifications/BaseNotification';
import AppStore from '../stores/App.store';
import NotificationManager from '../helpers/NotificationManager';

export default class AppService {
  private appStore: AppStore;

  NotificationManager: typeof NotificationManager;

  initService(appStore: AppStore) {
    this.appStore = appStore;
  }

  constructor() {
    this.NotificationManager = NotificationManager;
    this.NotificationManager.init(this);

    // this.appStore = appStore;
    // window.onerror = (msg, url, lineNo, columnNo, error) => { this.errorListener(error); };
    // window.onunhandledrejection = e => { this.errorListener(e.reason); };
  }

  errorListener(e: Error) {
    console.log(e);
    // this.NotificationManager.Error.open({
    //   message: e.message,
    //   onClose: e.onClose,
    //   status: e.status
    // });
  }

  sendNotify(notifyInstance: BaseNotification) {
    this.appStore.addNotification(notifyInstance);
  }

  closeNotify(notify: BaseNotification) {
    this.appStore.setNotifications(this.appStore.notifications.filter(el => el.id !== notify.id));
  }
}
