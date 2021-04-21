import * as R from 'ramda';

import { gameStatusResource } from '../../resources/game-status/game-status-api.actions';
import { loadNotificationsInfoResource } from '../../resources/notifications/notifications-api.actions';

import { store } from '../../libraries/store/store';

const newsActionsConfig = {
  RELOAD_GAME_STATUS: {
    canActivate: [
      '/secured/**'
    ],
    action: gameStatusResource
  },
  RELOAD_NOTIFICATIONS: {
    canActivate: [
      '/secured/**'
    ],
    action: loadNotificationsInfoResource
  },
}

export const handleNews = (news) => {
  console.log(news);
    R.map(
      action => store.dispatch(newsActionsConfig[action].action())
    )(news.actions || [])
}