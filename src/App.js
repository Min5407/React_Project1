import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Navigation } from "./components/navigation/navigation.component";
import Sign from "./pages/sign/sign-in-up.component";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign" component={Sign} />
      </Switch>
    </div>
  );
}

export default App;
