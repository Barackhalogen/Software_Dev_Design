import { BrowserRouter as Router, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";


import { Footer, Hero } from "./components";

import Partners from "./components/Partners";
import Services from "./components/Services";

function App() {
  return (
    <div className="App flex flex-col ">

      <Router>
        <Route exact path="/">
          <Hero />
          <Partners />
          <Services />
        </Route>
      <Footer />
      </Router >
    </div>
  );
}

export default App;
