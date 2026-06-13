import { Route, Routes } from "react-router-dom"
import Home from './../components/Home';
import Product from './../components/Product';
import Service from './../components/Service';
import About from './../components/About';
import ProductDetails from './../components/ProductDetails';



const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/detail/:name" element={<ProductDetails />} />
                <Route path="/service" element={<Service />} />
                <Route path="/about" element={<About />} />
            </Routes>

        </div>
    )
}

export default MainRoutes
