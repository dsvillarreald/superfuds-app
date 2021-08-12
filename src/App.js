import './App.css';
import Card from './components/Card/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <div className="d-flex center bg-info">
            <Switch>
              <Route exact path="/" component={Card}></Route>
            </Switch>
          </div>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
