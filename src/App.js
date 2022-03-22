import "./App.css";
import Product from "./components/Product";
import { masterlist } from "./components/Products";

function App() {
  const productList = masterlist;
  return (
    <div className="App">
      <Product productList={productList} />
    </div>
  );
}

export default App;
