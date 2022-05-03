import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import DisplayInfo from "./DisplayInfo";

function App() {
  const [puppies, setPuppies] = useState([])
  const [clickedPuppy, setClickedPuppy] = useState("")

  useEffect(() => { 
    fetch("http://localhost:3001/pups")
    .then(response => response.json())
    .then(pups => setPuppies(pups))
  }, [])

  function displayPup (puppy) { 
    setClickedPuppy(() => puppy)
  }

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
        <NavBar puppies={puppies} displayPup={displayPup} />
        <DisplayInfo clickedPuppy={clickedPuppy}/>
    </div>
  );
}

export default App;
