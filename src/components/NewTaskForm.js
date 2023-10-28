import React,{useState} from "react";

// This is the NewTaskForm component. It receives two props: onTaskFormSubmit, a function that will be called when a new task is submitted, and categories, an array of categories.
function NewTaskForm({onTaskFormSubmit,categories}) {
  

// This line declares a state variable newItemFields and a function to update it setNewItemFields. 
  const [newItemFields, setNewItemFields]=useState({
    text:'',
    category:'Code'
  })
 

// This function updates the state of newItemFields when the user types into the input. It uses the name of the input field to determine which property to update.
  function handleFields(e){
    const{name,value}=e.target
    setNewItemFields({...newItemFields,[name]:value}) 
  }
  

// This is the render method of this component. It returns a JSX element that includes a form with two input fields (one text input i.e Details and one select input i.e. category) and a submit button. 
// When the form is submitted, it calls the onTaskFormSubmit function with the current state of newItemFields.
  return (
    <form
    onSubmit={(e)=>{
      e.preventDefault()
      onTaskFormSubmit(newItemFields)}}
    className="new-task-form"
    >
      <label>
        Details
        <input value={newItemFields.text} onChange={handleFields}  type="text" name="text" />
      </label>

      <label>
        Category
        <select value={newItemFields.category} onChange={handleFields} name="category">
          {/* render <option> elements for each category here */}
          {categories.map((category,index)=>(
            <option key={index}>{category}</option>
          ))}
        </select>
      </label>

      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;