import { useState } from "react";

function AddCatForm({ onAddCat }) {
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCat = { name, latinName, image };

    onAddCat(newCat);

    setName("");
    setLatinName("");
    setImage("");
  };

  return (
    <div className="addCatForm componentBox">
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={{ width: "150px" }}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={{ width: "150px" }}>Latin Name:</label>
          <input
            type="text"
            value={latinName}
            onChange={(e) => setLatinName(e.target.value)}
            required
          />
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={{ width: "150px" }}>Image URL:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="https://example.com/cat.jpg"
          />
        </div>

        <button type="submit">Add Cat</button>
      </form>
    </div>
  );
}
// exercise 5
// name: Jungle cat
// latin name: Felis chaus
// image https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Jungle_Cat_on_tree_at_Sundarban%2C_West_Bengal%2C_India.jpg/250px-Jungle_Cat_on_tree_at_Sundarban%2C_West_Bengal%2C_India.jpg

export default AddCatForm;
