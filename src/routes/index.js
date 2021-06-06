import React from "react";
import { Route, Switch, BrowserRouter, Router, Redirect } from "react-router-dom";
import publicContact from "../pages/contact"
import adminContacts from "../pages/admin/contacts"
import NotFound from "../pages/notfound";
import { connect } from "react-redux";

const Routes = (props,{userAgent}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact key="publicContact" path="/" name="publicContact" component={publicContact} />
        <Route exact key="adminContacts" path="/admin/contacts" name="adminContacts" component={adminContacts} />
        <Route key="NF" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

Routes.getInitialProps = async (appContext) => {
  const { req } = appContext.ctx;
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapDispatchToProps)(Routes);
