import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardsContainer from './components/CardsContainer/CardsContainer';
import Header from './components/Header/Header';

//redux
import { Provider } from 'react-redux';
import store from './store';


function App() {

  return (
    <Router>
      <Provider store={store}>
        <Header />
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
