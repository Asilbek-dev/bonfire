import Custom from "./components/custom";
import Footer from "./components/footer";
import FooterContent from "./components/footerContent";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Products from "./components/poducts";
import Selling from "./components/selling";
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
      <Selling/>
      <div style = {{background : "#3D4853"}}>
        <FooterContent/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
