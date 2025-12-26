import { useState } from "react";

export default function ChangeEmoji() {
  //emojis
  const happyEmoji = "😀";
  const changeEmoji = "👻";

  // set state
  const [emoji, setEmoji] = useState(happyEmoji);

  //   handle change
  const handleChangeEmoji = () => {
    setEmoji((prev) => (prev === happyEmoji ? changeEmoji : happyEmoji));
  };
  let buttonTitle = emoji == happyEmoji ? "Change Mood" : "Be Happy";
  return (
    <>
      <p>Exercise 3</p>
      <div className="ChangeEmoji componentBox">
        <p style={{ fontSize: "100px" }}>{emoji}</p>
        <button onClick={handleChangeEmoji}>{buttonTitle}</button>
      </div>
    </>
  );
}
