import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage";
import ProductPage from "../pages/ProductPage";

const AllRoutes=(()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<HomePage/>}/>
        <Route  path="/aboutus" element={<AboutUsPage/>}/>
        <Route  path="/contactus" element={<ContactUsPage/>}/>
        <Route  path="/product" element={<ProductPage/>}/>
      </Routes>
    </BrowserRouter>

  );
})

export default AllRoutes;
