import React, { useState, useEffect } from "react";
import SimpleTabs from "./components/Tabs";
import Footer from "./Footer";
import HomePage from "./pages/HomePage";
import Store from "./pages/StorePage_Oppgavesett_1_EDIT";
import AboutPage from "./pages/AboutPage_Oppgavesett_3_EDIT";
import MarketingPage from "./pages/MarketingPage";
import "./styles/styles.css";

const App = () => {
  const [pokemonSelected, setPokemonSelected] = useState({});
  const [value, setValue] = useState(0);

  useEffect(() => {
    if(pokemonSelected.name) {
      setValue(1)
    }
  }, [pokemonSelected])

  return (
    <div className="app-wrapper">
      <SimpleTabs value={value} setValue={setValue}>
        <HomePage Label={"HOME"} setValue={setValue} setPokemonSelected={setPokemonSelected} />
        <Store
          Label={"Store"}
          pokemonSelected={pokemonSelected}
          setPokemonSelected={setPokemonSelected}
        />
        <AboutPage Label={"About Pokemon4Cash"} />
        <MarketingPage Label={"Marketing"} />
      </SimpleTabs>
      <Footer />
    </div>
  );
};

export default App;
