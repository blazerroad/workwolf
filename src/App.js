import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { crashReporter, thunk, vanillaPromise, readyStatePromise } from './store/middleware/middleware'
import { playerReducer } from './store/reducers/reducersFacad'
import { Services } from './store/actions/services/Services'
import { MainRouter } from './routers/main'
import { Them } from "./component/them"



const rootReducer = combineReducers({
  player: playerReducer,

});

const store = createStore(rootReducer, applyMiddleware(crashReporter, thunk, vanillaPromise, readyStatePromise));
Services.init(store.dispatch);

function App() {
  return (
    <Provider store={store}>
      <Them>
        <MainRouter />
      </Them>
    </Provider>

  );
}

export default App;
