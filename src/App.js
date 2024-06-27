import './App.css';
import Layout from './Components/Layouts/Layout';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import Product from "./Pages/Product"
import Faq from "./Pages/Faq"
import Contact from "./Pages/Contact"
import ChangePassword from './Components/Layouts/Profile/ChangePassword';
import Alluserprofile from './Components/Layouts/Profile/Alluserprofile';
import { createContext } from 'react';
import { useState } from 'react';

export const AppContext = createContext();

function App() {
  const [openpopup, setOpenpopup] = useState(true);


  return (
    //  context api provider tag
    <AppContext.Provider value={{openpopupform: openpopup}}>

      <div>

        <Layout >

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="/allprofile" element={<Alluserprofile />} />

          </Routes>
        </Layout>

      </div>

    </AppContext.Provider >
  );
}

export default App;
