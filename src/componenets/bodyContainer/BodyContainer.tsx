import { Route, Routes } from 'react-router-dom'
import Account from '../../pages/account/Account'
import {BillingPreference} from '../account/billingpreference/BillingPreference'
import {KeyAccountInfo} from '../account/keyAccountInfo/KeyAccountInfo'
import {PlanAndServices} from '../account/planandservices/PlanAndServices'
import {Profile} from '../account/profile/Profile'
import {Settings} from '../account/settings/Settings'
import Billing from '../../pages/billing/Billing'
import Home from '../../pages/home/Home'
import Notification from '../../pages/notification/Notification'
import Support from '../../pages/support/Support'


export const Container = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/billing' element={<Billing />} />
        <Route index element={<Account />} />
        <Route path="/account" element={<Account />}>
          <Route index element={<KeyAccountInfo />} />
          <Route path="/account/keyaccountinfo" element={<KeyAccountInfo />} />
          <Route path="/account/profile" element={<Profile />} />
          <Route path="/account/billingpreference" element={<BillingPreference />} />
          <Route path="/account/planandservices" element={<PlanAndServices />} />
          <Route path="/account/settings" element={<Settings />} />
        </Route>
        <Route path='/notification' element={<Notification />}/>
        <Route path='/support' element={<Support />} />
      </Routes>
    </div>
  )
}
