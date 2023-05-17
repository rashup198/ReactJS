
import "./App.css";
import NavBar from "./components/NavBar";
import ProductList from './components/ProductList'

function App() {

  const productList =[{
    Price:9999,
    name:"Iphone 10S MAX",
    quantity :0,

  },{
    Price:999,
    name:"Redmi 10S MAX",
    quantity :0,
  }]
  return (
    <div>
      <NavBar>
      </NavBar>
      <ProductList ProductList ={productList} ></ProductList>
      <footer></footer>
    </div>
  )
}

export default App;
