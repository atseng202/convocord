import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import * as ServerAPIUtil from './util/server_api_util';

import ReactModal from 'react-modal';
import * as PrivateserverAPIUtil from './util/privateserver_api_util';

document.addEventListener("DOMContentLoaded", () => {
  // let store = configureStore();
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { userId: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.createNewServer = ServerAPIUtil.createServer;
  window.PrivateserverAPIUtil = PrivateserverAPIUtil;

  const root = document.getElementById("root");
  ReactModal.setAppElement("#root");
  ReactDOM.render(< Root store={store}/>, root);
});