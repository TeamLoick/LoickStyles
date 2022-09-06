import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '4e0'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'c0e'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Usage/Components',
        component: ComponentCreator('/docs/Usage/Components', '90f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Usage/Sections',
        component: ComponentCreator('/docs/Usage/Sections', 'a13'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Usage/Utilities',
        component: ComponentCreator('/docs/Usage/Utilities', '393'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ef5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
