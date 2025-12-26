// import react and state
import { useState } from "react";
import AddCatForm from "./AddCatForm";

// import images
import cheetah from "../assets/cheetah.jpg";
import cougar from "../assets/cougar.jpg";
import jaguar from "../assets/jaguar.jpg";
import leopard from "../assets/leopard.jpg";
import lion from "../assets/lion.jpg";
import snowLeopard from "../assets/snowleopard.jpg";
import tiger from "../assets/tiger.jpg";

// cat array
const cats = [
  { name: "Cheetah", latinName: "Acinonyx jubatus", image: cheetah },
  { name: "Cougar", latinName: "Puma concolor", image: cougar },
  { name: "Jaguar", latinName: "Panthera onca", image: jaguar },
  { name: "Leopard", latinName: "Panthera pardus", image: leopard },
  { name: "Lion", latinName: "Panthera leo", image: lion },
  { name: "Snow leopard", latinName: "Panthera uncia", image: snowLeopard },
  { name: "Tiger", latinName: "Panthera tigris", image: tiger },
];

// Cat component
function Cat(props) {
  return (
    <div className="Cat componentBox">
      <img src={props.image} alt={props.name} width={"300px"} />
      <p className="Cat-name">Name: {props.name}</p>
      <p className="Cat-latinName">Latin name: {props.latinName}</p>
    </div>
  );
}

// BigCats component
function BigCats({ question }) {
  const [currentCats, setCurrentCats] = useState(cats);

  function handleSortCats() {
    let clonedCats = [...currentCats];
    clonedCats.sort((a, b) => a.latinName.localeCompare(b.latinName));
    setCurrentCats(clonedCats);
  }

  function handleReverseCats() {
    const reversedCats = [...currentCats].reverse();
    setCurrentCats(reversedCats);
  }

  function handleFilterCats() {
    const filteredCats = currentCats.filter((cat) =>
      cat.latinName.startsWith("Panthera")
    );
    setCurrentCats(filteredCats);
  }

  function resetCats() {
    setCurrentCats(cats);
  }

  const handleAddCat = (newCat) => {
    newCat.id = currentCats.length + 1;
    setCurrentCats([...currentCats, newCat]);
  };

  const handleDeleteCat = (deleteIndex) => {
    const updatedCats = currentCats.filter((_, index) => index !== deleteIndex);
    setCurrentCats(updatedCats);
  };
  return (
    <div className="cats-container">
      {/* Header */}
      <div className="cats-header">
        <h2 className="cats-title">
          {question ? "Big Cats Manager" : "Big Cats"}
        </h2>
      </div>

      {/* Cats List */}
      <div className="cats-list">
        {currentCats.map((cat, index) => (
          <div key={index} className="cat-item">
            <Cat name={cat.name} latinName={cat.latinName} image={cat.image} />

            {question && (
              <button
                onClick={() => handleDeleteCat(index)}
                className="delete-btn"
              >
                Delete
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Controls - Only show when question is true */}
      {question && (
        <div className="cats-controls">
          <div className="controls-row">
            <button className="control-btn" onClick={handleSortCats}>
              Sort Cats
            </button>
            <button className="control-btn" onClick={handleReverseCats}>
              Reverse Cats
            </button>
            <button className="control-btn" onClick={handleFilterCats}>
              Panthera Only
            </button>
            <button className="control-btn reset-btn" onClick={resetCats}>
              Reset Cats
            </button>
          </div>

          {/* Add Cat Form */}
          <div className="add-cat-form">
            <AddCatForm onAddCat={handleAddCat} />
          </div>
        </div>
      )}
    </div>
  );
}

export default BigCats;
