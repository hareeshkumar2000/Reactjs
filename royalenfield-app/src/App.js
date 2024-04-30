
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import './App.css';
import Home from './componets/Home';
import Websites from "./componets/Home";
import POWER from "./componets/Create";
import Update from "./componets/Update";



function App() {
  return (
    <Router>
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
<a class="navbar-brand" href="#">Navbar</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
<li class="nav-item">
  <Link class="nav-link active" aria-current="page" to="/">Home</Link>
</li>
<li class="nav-item">
  <Link class="nav-link" aria-current="page" to="POWER">Features</Link>
</li>
<li class="nav-item">
  <Link class="nav-link" aria-current="page" to= "/edit">Pricing</Link>
</li>
<li class="nav-item">
  <a class="nav-link disabled" aria-disabled="true">Disabled</a>
</li>
</ul>
</div>
</div>
</nav>
<Routes>
<Route exact path="/" element={<Websites />} />
<Route exact path="POWER" element={<POWER />} />
<Route exact path="/edit/:id" element={<Update />} />
</Routes>

    
    </div>
    </Router>
  );
}

export default App;
