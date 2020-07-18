import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import LandingPage from "./components/layout/LandingPage";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./components/Theme";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={() => <div>About</div>} />
          <Route exact path="/contact" component={() => <div>Contact</div>} />
          <Route exact path="/blog" component={() => <div>Blog</div>} />
          <Route exact path="/career" component={() => <div>Career</div>} />
          <Route exact path="/invite" component={() => <div>Invitation</div>} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
