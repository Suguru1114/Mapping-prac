import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// console.log(emojipedia);

// {
//   id: 1,
//   emoji: "💪",
//   name: "Tense Biceps",
//   meaning:
//     "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
// },

function createEntry(emojiTerm){
  return (
    <Entry
    //addking key prop is neccesary to use map function  
      key={emojiTerm.id}
      emoji={emojiTerm.emoji}
      name={emojiTerm.name}
      discription={emojiTerm.meaning}

    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
