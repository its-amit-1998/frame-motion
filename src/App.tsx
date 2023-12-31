import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import Modal from './components/Modal';
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();
  const [pizza, setPizza] = useState<any>({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState<boolean>(false);

  const addBase = (base: any) => {
    setPizza({ ...pizza, base })
  }

  const addTopping = (topping: any) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item: any) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }


  return (
    <>
      <Header />
      <Modal showModal={showModal} />
      <AnimatePresence mode="wait" onExitComplete={() => setShowModal(false)}>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />} />
          <Route path="/toppings" element={<Toppings addTopping={addTopping} pizza={pizza} />} />
          <Route path="/order" element={<Order pizza={pizza} setShowModal={setShowModal} />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
