import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CardsContainer from './components/CardsContainer/CardsContainer';
import Header from './components/Header/Header';

//redux
import { Provider } from 'react-redux';
import store from './store';

global.validateTitleLength = title => {
  if (!!title) {
      return title.length > 19 ? `${title.substring(0,19)}...` : title;
  }
  return null;
}

global.formatPrice = num => {
  if(!!num){
    num = num.split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
    num = num.split('').reverse().join('').replace(/^[\.]/,'');
    return num;
  }
  return num;
}

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
