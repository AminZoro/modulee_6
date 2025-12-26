import { useState } from "react";

function AddCatForm({ onAddCat }) {
  // State for controlled inputs
  const [name, setName] = useState("");
  const [latinName, setLatinName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new cat object
    const newCat = { name, latinName, image };

    // Pass it to parent component
    onAddCat(newCat);

    // Reset form fields
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
// For exercise 5 enter
// name: Lynx
// latin name: Lynx lynx
// image image: https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Lynx_Nationalpark_Bayerischer_Wald_01.jpg/1200px-Lynx_Nationalpark_Bayerischer_Wald_01.jpg

export default AddCatForm;
