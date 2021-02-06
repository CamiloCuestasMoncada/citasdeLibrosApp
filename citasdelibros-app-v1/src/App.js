//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
//import HomeContainer from './components/HomeContainer';
import BooksContainer from './containers/BooksContainer';
import HomeContainer from './containers/HomeContainer';

function App() {
  
  //const renderHome = () => <h1>Home</h1>;
  const renderBookContainer = () => <h1>Book Container</h1>;
  const renderBookContainer2 = () => <h1>Book Deleted</h1>;
  //const renderCustomerListContainer = () => <h1>Customers List Container</h1>
  const renderBookNewContainer = () => <h1>Book New Container</h1>;
  
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomeContainer}/>
        <Route exact path="/books" component={BooksContainer}/>
        <Switch>

          <Route exact path="/books/new" component={renderBookNewContainer}/> 
          <Route exact path="/books/:dni" component={renderBookContainer}/>
          <Route exact path="/books/:dni/del" component={renderBookContainer2}/>
          
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;

