
import './App.css';


function App() {
  return (
  <>
  <nav className="navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar scroll</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>N
    <div className="collapse navbar-collapse" id="navbarScroll">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          <a className="nav-link" href="#">Link</a>
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <navbar className="navbar">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <hr className="dropdown-divider"/>
            <a className="dropdown-item" href="#">Something else here</a>
            </navbar>
         
          <a class="nav-link disabled" aria-disabled="true">Link</a>
        
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        
        
        
        
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </>
  );
}

export default App;
