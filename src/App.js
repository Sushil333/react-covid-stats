import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Global from "./pages/Global";
import Contries from "./pages/Contries";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="mobile">
        <CssBaseline />
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Container>
            <Switch>
              <Route exact path="/"> 
                <Global />
              </Route>
              <Route path="/countries">
                <Contries />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </Container>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
