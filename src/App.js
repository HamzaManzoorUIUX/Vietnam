import logo from './logo.svg';
import './App.css';
import './styles/hamza.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pagse/home';
import Listings from './pagse/addListings'
import Blogs from './pagse/blogs';
import MarketPlace from './pagse/marketplace'
import Discovery from './pagse/discover';
import Login from './pagse/login'
import Signup from './pagse/signup'
import BlogDetail from './pagse/BlogDetail'
import PropertyDetails from './pagse/PropertyDetails'
function App() {
  return (
    <div className="App">
     <MarketPlace/>
    </div>
  );
}

export default App;
