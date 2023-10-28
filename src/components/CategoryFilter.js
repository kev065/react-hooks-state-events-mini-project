import React from "react";

//This is the CategoryFilter component. It receives three props: onButton, selectedButton and categories.
function CategoryFilter({onButton,selectedButton,categories}) {

  
// Renders the CategoryFilter component by returning a JSX element that includes a heading and a set of buttons. 
// Each button corresponds to a category. 
// The map function is used to create a button for each category. 
// The className of each button is set to 'selected' if the category matches the onButton prop; otherwise, it’s an empty string. 
// The onClick handler for each button calls the selectedButton function with the category as an argument whenever 'X' is clicked.
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category,index)=>(
        <button
         className={onButton===category?'selected':''}
         key={index}
         onClick={()=>{selectedButton(category)}}
         
         >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
