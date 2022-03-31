import React from "react";

import LoggedInHeader from "../../components/LoggedInHeader";
import MyContacts from "./MyContacts";
import MyExperts from "./MyExperts";
import MySubscriptions from "./MySubscriptions";
import MyProfile from "./Profile";
import MySettings from "./Settings";
import Support from "./Support";

const Accounts = () => {
  return (
    <>
      <LoggedInHeader />
      <section className="account-section">
        <div className="container">
          <div className="account-tabs">
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
              <button className="nav-link " id="v-pills-subscription-tab" data-bs-toggle="pill" data-bs-target="#v-pills-subscription" type="button" role="tab" aria-controls="v-pills-subscription" aria-selected="true">My Subscription</button>
              <button className="nav-link" id="v-pills-contact-tab" data-bs-toggle="pill" data-bs-target="#v-pills-contact" type="button" role="tab" aria-controls="v-pills-contact" aria-selected="false">My Contacts</button>
              <button className="nav-link" id="v-pills-experts-tab" data-bs-toggle="pill" data-bs-target="#v-pills-experts" type="button" role="tab" aria-controls="v-pills-experts" aria-selected="false">My Experts</button>
              <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">My Settings</button>
              <button className="nav-link" id="v-pills-support-tab" data-bs-toggle="pill" data-bs-target="#v-pills-support" type="button" role="tab" aria-controls="v-pills-support" aria-selected="false">Help</button>
            </div>
            {/* <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button className="nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
              <button className="nav-link " id="v-pills-subscription-tab" data-bs-toggle="pill" data-bs-target="#v-pills-subscription" type="button" role="tab" aria-controls="v-pills-subscription" aria-selected="true">My Subscription</button>
              <button className="nav-link" id="v-pills-contact-tab" data-bs-toggle="pill" data-bs-target="#v-pills-contact" type="button" role="tab" aria-controls="v-pills-contact" aria-selected="false">My Contacts</button>
              <button className="nav-link" id="v-pills-experts-tab" data-bs-toggle="pill" data-bs-target="#v-pills-experts" type="button" role="tab" aria-controls="v-pills-experts" aria-selected="false">My Experts</button>
              <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">My Settings</button>
              <button className="nav-link" id="v-pills-support-tab" data-bs-toggle="pill" data-bs-target="#v-pills-support" type="button" role="tab" aria-controls="v-pills-support" aria-selected="false">Help</button>
            </div> */}
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                <MyProfile />
              </div>
              <div className="tab-pane fade" id="v-pills-subscription" role="tabpanel" aria-labelledby="v-pills-subscription-tab">
                <MySubscriptions />
              </div>
              <div className="tab-pane fade" id="v-pills-contact" role="tabpanel" aria-labelledby="v-pills-contact-tab">
                <MyContacts />
              </div>
              <div className="tab-pane fade" id="v-pills-experts" role="tabpanel" aria-labelledby="v-pills-experts-tab ">
                <MyExperts />
              </div>
              <div className="tab-pane fade" id="v-pills-settings" role="tabpanel " aria-labelledby="v-pills-settings-tab ">
                <MySettings />
              </div>
              <div className="tab-pane fade" id="v-pills-support" role="tabpanel " aria-labelledby="v-pills-support-tab ">
                <Support />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Accounts