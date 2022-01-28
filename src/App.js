// import Header from "./Components/page2/header";
// import Footer from "./Components/page2/footer";
// import Search from "./Components/page2/search";
// import Sql_container from "./Components/page2/sql";
// import Output_container from "./Components/page2/output";
import Page2 from "./Page2";
import Landing from "./Components/landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page3 from "./Page3";
import { useState, useEffect } from "react";

// import { useState } from "react";

const App = () => {
  // const [result, setResult] = useState();
  const [config, setConfig] = useState(null);
  if (config !== "all") {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/Page3">
              <Page3 />
            </Route>
            <Route exact path="/Page2">
              <Page2 config={config} setConfig={setConfig} />
            </Route>
            <Route exact path="/">
              <Landing />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  } else if (config === "all") {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/page2">
                <Page3 />
              </Route>
              <Route exact path="/">
                <Landing />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
};

export default App;
