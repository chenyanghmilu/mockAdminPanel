import React from "react";
import { Switch, Route } from "react-router-dom";

import Etherscan from "../etherscan/Etherscan";
import User from "../user/User";

const MainPenel = () => {
  return (
    <div className="main-panel">
      <Switch>
        <Route path="/user" component={User} />
        <Route path="/etherscan" component={Etherscan} />
      </Switch>
    </div>
  );
};

export default MainPenel;
