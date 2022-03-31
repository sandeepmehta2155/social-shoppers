import React from 'react'
import { Routes, Route } from "react-router-dom";

import LoggedInHeader from '../../components/LoggedInHeader'

import MyContacts from '../../views/Accounts/MyContacts'
import MyExperts from '../../views/Accounts/MyExperts'
import MySubscriptions from '../../views/Accounts/MySubscriptions'
import Profile from '../../views/Accounts/Profile'
import MySettings from '../../views/Accounts/Settings'
import Support from '../../views/Accounts/Support'
import AccountSidebar from './Sidebar';


const AccountLayout = () => {
  return (
    <>
      <section className="">
        <div className="account-main-layout">
          <AccountSidebar />
          <div className="account-app-layout">
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="contacts" element={<MyContacts />} />
              <Route path="experts" element={<MyExperts />} />
              <Route path="settings" element={<MySettings />} />
              <Route path="subscriptions" element={<MySubscriptions />} />
              <Route path="help" element={<Support />} />
            </Routes>
          </div>
        </div>
      </section>
    </>
  )
}

export default AccountLayout