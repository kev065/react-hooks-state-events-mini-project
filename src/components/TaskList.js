import React from "react";
import Task from "./Task";

// TaskList is this component's function that takes in two props: tasks and deletedItem
function TaskList({tasks,deletedItem}) {


// This section returns a <div> element with the class name 'tasks'. 
// This div uses the map function to iterate over the tasks array and create a Task component for each task. 
// The Task component is passed the following props: deletedItem(to delete a task ffrom the list), key(identifies a specific task), text, and category.
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task,index)=>(
        <Task 
          deletedItem={deletedItem}
          key={index}
          text={task.text}
          category={task.category}
         />
      ))}
    </div>
  );
}

export default TaskList;