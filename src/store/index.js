import createSagaMiddleware from 'redux-saga';
import {persistStore} from 'redux-persist';
import persistReducers from './modules/reduxPersist';
import createStore from './createStore';
import rootSaga from './modules/rootSaga';
import rootReducer from './modules/rootReducer';

const sagaMonitor =
  __DEV__ === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({sagaMonitor});
const middlewares = [sagaMiddleware];
const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};
