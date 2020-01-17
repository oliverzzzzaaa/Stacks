import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store'
import Root from './root'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store = configureStore();
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
    delete window.currentUser
  }
  ReactDOM.render(<Root store={store}/>, root);
});