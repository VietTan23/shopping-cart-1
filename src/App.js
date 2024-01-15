// App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import Header from "./components/Header";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
