import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CharactersCards, HomePage } from "../pages";

export const Router = () => {
  const [character, setCharacter] = React.useState("");
  const [status2, setStatus2] = React.useState("");
  
  
  function handleSetCharacter(character) {
    setCharacter(character);
  }

  function handleSetStatus2(status) {
    setStatus2(status);
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/card">
          <CharactersCards
            character={character}
            status2={status2}
            setStatus2={handleSetStatus2} 
            
          />
        </Route>

        <Route path="/">
        <HomePage setCharacter={handleSetCharacter} 
        setStatus2={handleSetStatus2} 
        
        />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};