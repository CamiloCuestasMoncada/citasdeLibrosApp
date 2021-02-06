//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
//import HomeContainer from './components/HomeContainer';
import BooksContainer from './containers/BooksContainer';
import HomeContainer from './containers/HomeContainer';
import BookContainer from './containers/BookContainer';


function App() {
  
  //const renderHome = () => <h1>Home</h1>;
  //const renderBookContainer = () => <h1>Book Container</h1>;
  //const renderBookContainer2 = () => <h1>Book Deleted</h1>;
  //const renderCustomerListContainer = () => <h1>Customers List Container</h1>
  const renderBookNewContainer = () => <h1>Book New Container</h1>;
  
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomeContainer}/>
        <Route exact path="/books" render={BooksContainer}/>
        <Switch>

          <Route path="/books/new" component={renderBookNewContainer}/> 
          

          <Route path="/books/:dni" 
                    render={props => <BookContainer dni={props.match.params.dni} />} />



          
          
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;

