import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import { App } from './components/app';
import { ApiDocs } from './components/_docs/api-docs';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <ApiDocs />
      <App />
    </div>
  </Provider>,
  document.querySelector('#root')
);
