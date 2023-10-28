import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

// Declare state variables task, categories and selectedCategoryButton.
function App() {
  const [task, setTask] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [selectedCategoryButton, setSelectedCategoryButton] = useState('All')
  
// Adds a new item to the list of tasks using the spread operator '...' to add a new task to the existing ones.
  function addNewItemtoList(newItem){
    setTask([...task,newItem])
  }


// Removes an item from the list of tasks using the filter method. This creates a new array without the deleted item.
  function deletedItem(deletedItem){
    setTask(task.filter((item)=>item.text !== deletedItem))
  }
 

// Holds an array of tasks based on the selected category.
  const itemDisplayed = task
  .filter(
    (item)=>{ 
    if(selectedCategoryButton==='All') return true
    return selectedCategoryButton === item.category
   } 
  )

  
// Render the app by returning the compoents: CategoryFilter, NewTaskForm and Tasklist.
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        onButton={selectedCategoryButton}
        selectedButton={setSelectedCategoryButton} 
      />
      <NewTaskForm
        onTaskFormSubmit={addNewItemtoList}
        categories={categories}
      />
      <TaskList 
        deletedItem={deletedItem}
        tasks={itemDisplayed} />
    </div>
  );
}

export default App;