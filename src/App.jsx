import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product";
import Pricing from "./pages/pricing";
import Homepage from "./pages/homepage";
import PageNotFound from "./pages/page-not-found";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/" element={<Homepage />} />

        {/* Executed when nothing oath matched */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
