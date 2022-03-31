import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AccountSidebar = () => {
  const navigation = useNavigate()
  const [routes, setRoutes] = useState([
    {
      title: 'Profile',
      path: ''
    },
    {
      title: 'My Subscription',
      path: 'subscriptions'
    },
    {
      title: 'Contacts',
      path: 'contacts'
    },
    {
      title: 'My Experts',
      path: 'experts'
    },
    {
      title: 'My Settings',
      path: 'settings'
    },
    {
      title: 'Help',
      path: 'help'
    }
  ])
  const navigate = (path) => {
    navigation('/accounts/' + path)
  }
  const getActiveRoute = (path) => {
    if (window.location.href.includes('/accounts/' + path)) {
      return 'account-sidebar-links active'
    } else {
      return 'account-sidebar-links'
    }
  }
  return (
    <>
      <div className="account-sidebar">
        <div className="flex-column me-3" aria-orientation="vertical">
          {
            routes.map((route, index) =>
              // if () {
              <button
                disabled={!route.title.toLowerCase().includes("Profile".toLowerCase())}
                key={index}
                className={getActiveRoute(route.path)}
                onClick={() => navigate(route.path)}
              >
                {route.title}
              </button>
              // } else {
              //   <button
              //     key={index}
              //     disabled
              //     className={getActiveRoute(route.path)}
              //     onClick={() => navigate(route.path)}
              //   >
              //     {route.title}
              //   </button>
              // }

            )
          }
        </div>
      </div>
    </>
  )
}

export default AccountSidebar