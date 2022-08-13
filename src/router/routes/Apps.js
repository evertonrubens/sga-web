import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AppRoutes = [
  {
    path: '/apps/financial/release',
    component: lazy(() => import('../../views/apps/financial/releases'))
  },
  {
    path: '/apps/financial/release/preview/:id',
    component: lazy(() => import('../../views/apps/financial/releases/preview')),
    meta: {
      navLink: '/apps/financial/release/preview/'
    }
  },
  {
    path: '/apps/financial/accounts-launch/preview/:id',
    component: lazy(() => import('../../views/apps/financial/releases/preview')),
    meta: {
      navLink: '/apps/financial/account-launch/preview'
    }
  },

  {
    path: '/apps/accounting/preview',
    exact: true,
    component: () => <Redirect to='/apps/accounting/preview/4987' />
  },
  {
    path: '/apps/accounting/edit/:id',
    component: lazy(() => import('../../views/apps/accounting/edit')),
    meta: {
      navLink: '/apps/accounting/edit'
    }
  },
  {
    path: '/apps/accounting/edit',
    exact: true,
    component: () => <Redirect to='/apps/accounting/edit/4987' />
  },
  {
    path: '/apps/accounting/add',
    component: lazy(() => import('../../views/apps/accounting/add'))
  },
  {
    path: '/apps/accounting/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/apps/accounting/print'))
  },


  {
    path: '/apps/config-sys/list',
    component: lazy(() => import('../../views/apps/config-sys/list'))
  },
  {
    path: '/apps/config-sys/preview/:id',
    component: lazy(() => import('../../views/apps/config-sys/preview')),
    meta: {
      navLink: '/apps/config-sys/preview'
    }
  },
  {
    path: '/apps/config-sys/preview',
    exact: true,
    component: () => <Redirect to='/apps/config-sys/preview/4987' />
  },
  {
    path: '/apps/config-sys/edit/:id',
    component: lazy(() => import('../../views/apps/config-sys/edit')),
    meta: {
      navLink: '/apps/config-sys/edit'
    }
  },
  {
    path: '/apps/config-sys/edit',
    exact: true,
    component: () => <Redirect to='/apps/config-sys/edit/4987' />
  },
  {
    path: '/apps/config-sys/add',
    component: lazy(() => import('../../views/apps/config-sys/add'))
  },
  {
    path: '/apps/config-sys/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/apps/config-sys/print'))
  },


  {
    path: '/apps/email',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email'))
  },
  {
    path: '/apps/email/:folder',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/email/label/:label',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/email/:filter',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },


  {
    path: '/apps/inventory/list',
    component: lazy(() => import('../../views/apps/inventory/list'))
  },
  {
    path: '/apps/inventory/preview/:id',
    component: lazy(() => import('../../views/apps/inventory/preview')),
    meta: {
      navLink: '/apps/inventory/preview'
    }
  },
  {
    path: '/apps/inventory/preview',
    exact: true,
    component: () => <Redirect to='/apps/inventory/preview/4987' />
  },
  {
    path: '/apps/inventory/edit/:id',
    component: lazy(() => import('../../views/apps/inventory/edit')),
    meta: {
      navLink: '/apps/inventory/edit'
    }
  },
  {
    path: '/apps/inventory/edit',
    exact: true,
    component: () => <Redirect to='/apps/inventory/edit/4987' />
  },
  {
    path: '/apps/inventory/add',
    component: lazy(() => import('../../views/apps/inventory/add'))
  },
  {
    path: '/apps/inventory/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/apps/inventory/print'))
  },


  {
    path: '/apps/invoice/list',
    component: lazy(() => import('../../views/apps/invoice/list'))
  },
  {
    path: '/apps/invoice/preview/:id',
    component: lazy(() => import('../../views/apps/invoice/preview')),
    meta: {
      navLink: '/apps/invoice/preview'
    }
  },
  {
    path: '/apps/invoice/preview',
    exact: true,
    component: () => <Redirect to='/apps/invoice/preview/4987' />
  },
  {
    path: '/apps/invoice/edit/:id',
    component: lazy(() => import('../../views/apps/invoice/edit')),
    meta: {
      navLink: '/apps/invoice/edit'
    }
  },
  {
    path: '/apps/invoice/edit',
    exact: true,
    component: () => <Redirect to='/apps/invoice/edit/4987' />
  },
  {
    path: '/apps/invoice/add',
    component: lazy(() => import('../../views/apps/invoice/add'))
  },
  {
    path: '/apps/invoice/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/apps/invoice/print'))
  },


  {
    path: '/apps/purchases/list',
    component: lazy(() => import('../../views/apps/purchases/list'))
  },
  {
    path: '/apps/purchases/preview/:id',
    component: lazy(() => import('../../views/apps/purchases/preview')),
    meta: {
      navLink: '/apps/purchases/preview'
    }
  },
  {
    path: '/apps/purchases/preview',
    exact: true,
    component: () => <Redirect to='/apps/purchases/preview/4987' />
  },
  {
    path: '/apps/purchases/edit/:id',
    component: lazy(() => import('../../views/apps/purchases/edit')),
    meta: {
      navLink: '/apps/purchases/edit'
    }
  },
  {
    path: '/apps/purchases/edit',
    exact: true,
    component: () => <Redirect to='/apps/purchases/edit/4987' />
  },
  {
    path: '/apps/purchases/add',
    component: lazy(() => import('../../views/apps/purchases/add'))
  },
  {
    path: '/apps/purchases/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/apps/purchases/print'))
  },


  {
    path: '/apps/sales/list',
    component: lazy(() => import('../../views/apps/sales/list'))
  },
  {
    path: '/apps/sales/preview/:id',
    component: lazy(() => import('../../views/apps/sales/preview')),
    meta: {
      navLink: '/apps/sales/preview'
    }
  },
  {
    path: '/apps/sales/preview',
    exact: true,
    component: () => <Redirect to='/apps/sales/preview/4987' />
  },
  {
    path: '/apps/sales/edit/:id',
    component: lazy(() => import('../../views/apps/sales/edit')),
    meta: {
      navLink: '/apps/sales/edit'
    }
  },
  {
    path: '/apps/sales/edit',
    exact: true,
    component: () => <Redirect to='/apps/sales/edit/4987' />
  },
  {
    path: '/apps/sales/add',
    component: lazy(() => import('../../views/apps/sales/add'))
  },
  {
    path: '/apps/sales/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/apps/sales/print'))
  }
]

export default AppRoutes
