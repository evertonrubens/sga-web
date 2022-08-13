// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import invoice from '@src/views/apps/invoice/store/reducer'
import ecommerce from '@src/views/apps/ecommerce/store/reducer'
import accesscontrol from '@src/views/apps/access-control/store/reducer'
import accounting from '@src/views/apps/accounting/store/reducer'
import configsys from '@src/views/apps/config-sys/store/reducer'
import financial from '@src/views/apps/financial/store/reducer'
import inventory from '@src/views/apps/inventory/store/reducer'
import purchases from '@src/views/apps/purchases/store/reducer'
import sales from '@src/views/apps/sales/store/reducer'
import user from '@src/views/apps/user/store/reducer'

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  invoice,
  ecommerce,
  accesscontrol,
  accounting,
  configsys,
  financial,
  inventory,
  purchases,
  sales,
  user
})

export default rootReducer
