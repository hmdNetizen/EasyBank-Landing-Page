import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import LandingPage from "./components/layout/LandingPage";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./components/Theme";
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import Career from "./components/pages/Career";
import Invitation from "./components/pages/Invitation";

function App() {
  const [value, setValue] = useState(0);
  const [selectedList, setSelectedList] = useState(0);

  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Header
            value={value}
            setValue={setValue}
            selectedList={selectedList}
            setSelectedList={setSelectedList}
          />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <LandingPage {...props} setValue={setValue} />}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/career" component={Career} />
            <Route exact path="/invite" component={Invitation} />
          </Switch>
          <Footer setValue={setValue} />
        </Router>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
