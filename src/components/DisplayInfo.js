import React from 'react'

function DisplayInfo({clickedPuppy}) {

  return (
    <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
            <img src={clickedPuppy.image} alt="Mr. Bonkers" />
            <h2>{clickedPuppy.name}</h2>
            <button>{clickedPuppy.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
        </div>
    </div>
  )
}

export default DisplayInfo