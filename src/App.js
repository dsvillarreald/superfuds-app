import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//redux
import { Provider } from 'react-redux';
import store from './store';
import CardsContainer from './components/CardsContainer/CardsContainer';

function App() {

  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <div className="d-flex center">
            <Switch>
              <Route exact path="/" component={CardsContainer}></Route>
            </Switch>
          </div>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
