import Custom from "./components/custom";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Products from "./components/poducts";
import Service from "./components/service";

function App() {
  return (
    <>
      <div className="bg-dark py-5">
        <Navbar/>
        <Header/>
        <Service/>
      </div>
      <Custom/>
      <Products/>
    </>
  );
}

export default App;
