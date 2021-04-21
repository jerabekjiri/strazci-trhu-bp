import 'event-source-polyfill/src/eventsource.js';

import { getSessionStorageParam } from '../../utils/getStorageParam.fnc';
import { isLoggedInSelector } from '../../resources/security/selectors/security.selectors';
import { store } from '../../libraries/store/store';

import { handleNews } from './news-handler.provider';
import { logoutResource } from '../../resources/security/security-api.actions';

export class WebsocketProvider {

  constructor() {
    /*this.createWebSocket();

    store.subscribe(_ => {
      !isLoggedInSelector(store.getState()) && this.source.close()
    })*/
  }

  createWebSocket() {
    setTimeout(() => {
      this.source = new EventSourcePolyfill(
        window.MySuperApp.back_end_endpoint + '/notification/news',
        {
          headers: {
            'authorization': getSessionStorageParam('accessToken')
          }
        }
      );

      this.source.onmessage = e =>
        !!e.data && handleNews(JSON.parse(e.data));

      this.source.onerror = e =>
        this.createWebSocket();
    }, 2000);
  }
}