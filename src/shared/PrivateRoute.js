import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import authenticateAPI from "../api/authentication";
import GuestUserHome from "../component/common/guestuserhome";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [authKey, setAuthKey] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await authenticateAPI
        .authenticate()
        .then((data) => {
          setAuthKey(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    })();
  }, []);
  if (isLoading) {
    return null;
  } else {
    return <Route {...rest} component={authKey ? Component : GuestUserHome} />;
  }
};

export default PrivateRoute;
