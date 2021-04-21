export const DESIGN_SYSTEM_ROUTES = [
  {
    path: '/design-system',
    children: [
      {
        path: '/welcome',
        component: 'ds-welcome-page',
        action: () => import('./pages/welcome/ds-welcome.page')
      },
      {
        path: '/button',
        component: 'ds-button-page',
        action: () => import('./pages/button/ds-button.page')
      },
      {
        path: '/hyperlink',
        component: 'ds-hyperlink-page',
        action: () => import('./pages/hyperlink/ds-hyperlink.page')
      },
      {
        path: '/color-palette',
        component: 'ds-color-palette-page',
        action: () => import('./pages/color-palette/ds-color-palette.page')
      },
      {
        path: '/typography',
        component: 'ds-typography-page',
        action: () => import('./pages/typography/ds-typography.page')
      },
      {
        path: '/spacing',
        component: 'ds-spacing-page',
        action: () => import('./pages/spacing/ds-spacing-page')
      },
      {
        path: '/icon',
        component: 'ds-icon-page',
        action: () => import('./pages/icon/ds-icon.page')
      },
      {
        path: '/icon-button',
        component: 'ds-icon-button-page',
        action: () => import('./pages/icon-button/ds-icon-button.page')
      },
      {
        path: '/progress-bar',
        component: 'ds-progress-bar-page',
        action: () => import('./pages/progress-bar/ds-progress-bar.page')
      },
      {
        path: '/atomic-tile',
        component: 'ds-atomic-tile-page',
        action: () => import('./pages/atomic-tile/ds-atomic-tile.page')
      },
      {
        path: '/tooltip',
        component: 'ds-tooltip-page',
        action: () => import('./pages/tooltip/ds-tooltip.page')
      },
      {
        path: '/vertical-menu-item',
        component: 'ds-vertical-menu-item-page',
        action: () => import('./pages/vertical-menu-item/ds-vertical-menu-item.page')
      },
      {
        path: '/horizontal-menu-item',
        component: 'ds-horizontal-menu-item-page',
        action: () => import('./pages/horizontal-menu-item/ds-horizontal-menu-item.page')
      },
      {
        path: '/textarea',
        component: 'ds-textarea-page',
        action: () => import('./pages/textarea/ds-textarea.page')
      },
      {
        path: '/top-screen-button',
        component: 'ds-top-screen-button-page',
        action: () => import('./pages/top-screen-button/ds-top-screen-button.page')
      },
      {
        path: '/skill-point-tile',
        component: 'ds-skill-point-tile-page',
        action: () => import('./pages/skill-point-tile/ds-skill-point-tile.page')

      },
      {
        path: '/main-menu-item',
        component: 'ds-main-menu-item-page',
        action: () => import('./pages/main-menu-item/ds-main-menu-item.page')
      },
      {
        path: '/skill-item',
        component: 'ds-skill-item-page',
        action: () => import('./pages/skill-item/ds-skill-item.page')
      },
      {
        path: '/input-field',
        component: 'ds-input-field-page',
        action: () => import('./pages/input-field/ds-input-field.page')
      }
    ]
  }
]
