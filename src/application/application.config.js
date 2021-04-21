export const SIZES = {
  isPhone: () => window.innerWidth < 576,
  isTablet: () => window.innerWidth >= 576 && window.innerWidth < 768,
  isDesktop: () => window.innerWidth >= 768
}

export const ROLES = {
  PLAYER: 'PLAYER',
  MANAGER: 'MANAGER'
}

export const MODULES = {
  DASHBOARD: 'DASHBOARD',
  MY_STORY: 'MY_STORY',
  SKILLS_AND_BADGES: 'SKILLS_AND_BADGES',
  MAP: 'MAP',
  MARKET: 'MARKET',
  LIBRARY: 'LIBRARY',
  SIMULATOR: 'SIMULATOR'
}

export const SUB_MODULES = {
  MISSIONS_AND_QUESTS: 'MISSIONS_AND_QUESTS',
  SKILLS: 'SKILLS',
  BADGES: 'BADGES',
  STORIES: 'STORIES',
  BEST_PRACTICES: 'BEST_PRACTICES',
  DICTIONARY: 'DICTIONARY',
  SHOP: 'SHOP',
  INVENTORY: 'INVENTORY'
}

export const MODULES_CONFIG = [
  {
    type: MODULES.DASHBOARD,
    role: [ROLES.PLAYER],
    active: false,
    icon: 'mg-main-menu:base',
    route: '/secured/dashboard/missions-and-quests',
    subModules: [
      {
        type: SUB_MODULES.MISSIONS_AND_QUESTS,
        role: [ROLES.PLAYER],
        active: false,
        icon: 'mg-sub-menu:missions-and-quests',
        route: '/secured/dashboard/missions-and-quests'
      }
    ]
  },
  {
    type: MODULES.MY_STORY,
    role: [ROLES.PLAYER],
    active: false,
    icon: 'mg-main-menu:my-story',
    route: ''
  },
  {
    type: MODULES.SKILLS_AND_BADGES,
    role: [ROLES.PLAYER],
    active: false,
    icon: 'mg-main-menu:my-skills',
    route: '/secured/skills-and-badges/skills',
    subModules: [
      {
        type: SUB_MODULES.SKILLS,
        role: [ROLES.PLAYER],
        active: true,
        icon: 'mg-sub-menu:skills',
        route: '/secured/skills-and-badges/skills'
      },
      {
        type: SUB_MODULES.BADGES,
        role: [ROLES.PLAYER],
        active: true,
        icon: 'mg-sub-menu:badges',
        route: '/secured/skills-and-badges/badges'
      }
    ]
  },
  {
    type: MODULES.MAP,
    role: [ROLES.PLAYER],
    active: false,
    icon: 'mg-main-menu:map',
    route: ''
  },
  {
    type: MODULES.MARKET,
    role: [ROLES.PLAYER],
    active: true,
    icon: 'mg-main-menu:market',
    route: '/secured/market/shop',
    subModules: [
      {
        type: SUB_MODULES.SHOP,
        role: [ROLES.PLAYER],
        active: true,
        icon: 'mg-sub-menu:stories',
        route: '/secured/market/shop'
      },
      {
        type: SUB_MODULES.INVENTORY,
        role: [ROLES.PLAYER],
        active: true,
        icon: 'mg-sub-menu:best-practices',
        route: '/secured/market/inventory'
      }
    ]
  },
  {
    type: MODULES.SIMULATOR,
    role: [ROLES.PLAYER],
    active: true,
    icon: 'mg-main-menu:library',
    route: '/secured/simulator'
  }
];