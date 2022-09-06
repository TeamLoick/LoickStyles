import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/es/markdown-page',
    component: ComponentCreator('/es/markdown-page', '309'),
    exact: true
  },
  {
    path: '/es/docs',
    component: ComponentCreator('/es/docs', 'f05'),
    routes: [
      {
        path: '/es/docs/intro',
        component: ComponentCreator('/es/docs/intro', '160'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/Usage/Components',
        component: ComponentCreator('/es/docs/Usage/Components', '8e0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/Usage/Sections',
        component: ComponentCreator('/es/docs/Usage/Sections', 'db2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/es/docs/Usage/Utilities',
        component: ComponentCreator('/es/docs/Usage/Utilities', 'ba9'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/es/',
    component: ComponentCreator('/es/', '6ad'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
