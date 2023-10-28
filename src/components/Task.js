import React from "react";


// This Task function takes three props as parameters: text, category, and deletedItem.
function Task({text,category,deletedItem}) {


// The text and category props are displayed in two separate <div> elements.
// When the 'X' button is clicked, it calls the deletedItem function with text as an argument. This deletes the task.
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={()=>deletedItem(text)} className="delete">X</button>
    </div>
  );
}

export default Task;