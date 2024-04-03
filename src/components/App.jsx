import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// console.log(emojipedia);

//create Entry function
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

//after creating entry function & pass it to map
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
