import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/home/Home";
import { Galeria } from "../pages/galeria/Galeria";


export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rotas públicas */}
                <Route path="/" element={<Home />} />

                {/* Rotas públicas */}
                <Route path="/galeria" element={<Galeria />} />

            </Routes>

        </BrowserRouter>

    )

}