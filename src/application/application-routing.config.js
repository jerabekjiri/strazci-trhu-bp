import { store } from '../modules/libraries/store/store.js';

import { navigate } from './application.actions.js';

export const APPLICATION_ROUTES = [
  {
    path: '/public',
    children: [
      {
        path: '/login',
        component: 'login-page',
        action: () => import('./pages/public/login/login.page')
      }
    ]
  },
  {
    path: '/secured',
    children: [
      {
        path: '/market',
        children: [
          {
            path: '/shop',
            component: 'shop-page',
            action: () => import('./pages/secured/market/shop/shop.page')
          },
          {
            path: '/inventory',
            component: 'inventory-page',
            action: () => import('./pages/secured/market/inventory/inventory.page')
          }
        ]
      },
      {
        path: '/simulator',
        children: [
          {
            path: '/',
            component: 'simulator-page',
            action: () => import('./pages/secured/simulator/simulator.page')
          },
          {
            path: '/:id',
            component: 'story-page',
            action: () => import('./pages/secured/simulator/story.page')
          }
        ]
      },
      {
        path: '/test',
        component: 'test-page',
        action: () => import('./pages/secured/test/test.page')
      },
    ]
  },
  {
    path: '(.*)',
    component: 'span',
    action: () => store.dispatch(navigate('/public/login'))
  }
]