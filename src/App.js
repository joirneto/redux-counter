import Counter from "./component/counter";
import {applyMiddleware,compose, createStore} from 'redux'
import counterReducer from './reducer'
import {Provider} from 'react-redux'
import logger from 'redux-logger'

const store = createStore(
  counterReducer,
  compose(applyMiddleware(logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  )

function App() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
}

export default App;
