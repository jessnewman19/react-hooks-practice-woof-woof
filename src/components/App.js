import React, {useEffect, useState} from "react";
import NavBar from "./NavBar";
import DisplayInfo from "./DisplayInfo";

function App() {
  const [puppies, setPuppies] = useState([])
  const [clickedPuppy, setClickedPuppy] = useState("")

  function getPuppies() { 
    fetch("http://localhost:3001/pups")
    .then(response => response.json())
    .then(pups => setPuppies(pups))
  }

  useEffect(() => { 
    getPuppies()
  }, [])

  function displayPup (puppy) { 
    setClickedPuppy(() => puppy)
  }

  function handleButtonClick () { 
    fetch(`http://localhost:3001/pups/${clickedPuppy.id}`, {
      method: "PATCH",
      headers: { 
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify({isGoodDog: !clickedPuppy.isGoodDog})
    })
    .then(response => response.json())
    .then(newData => { 
      getPuppies()
      setClickedPuppy(newData)})
  }

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
        <NavBar puppies={puppies} displayPup={displayPup} />
        <DisplayInfo clickedPuppy={clickedPuppy} handleButtonClick={handleButtonClick}/>
    </div>
  );
}

export default App;
