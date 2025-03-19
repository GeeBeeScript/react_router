import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="App">
      {/* Below is saying the Route component should be active when our url is
      'our-domain/welcome' . Between the tags of the Route component is the content
      that should be active when the url path is activated.  */}
      {/* <header>
        <MainHeader />
      </header> */}
      <main>
        <Routes>
          <Route path="/welcome" element={ <Main/> } />
          <Route path="/products" element={ <Products /> } />
          <Route path="/products/:productId" element={ <ProductDetail /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// "Route" is actually a component. It is a component that allows us to
// define a certain path, and then the react component that should be
// loaded when that path becomes active in the url. You're not limited
// to defining routes in only one component. You can define routes in whatever
// component you wawnt. 