import "./style.css";

const toDoList = [];

class Task {
  constructor(title, description, dueDate, priority, checklist) {
    if (!new.target) throw new Error("Must use 'new' with List");
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = checklist;
    this.id = crypto.randomUUID();
  }
  toggleDone() {
    this.checklist = !this.checklist;
  }
}

// addList(new Task(title, description, dueDate, priority, checklist));

// add list
function addList(task) {
  toDoList.push(task);
  // console.log(task);
}

addList(
  new Task(
    "learn html",
    "learn html on the odin project",
    "5/43/5435",
    "high",
    "checked"
  )
);

// remove or delete task/list and put them in completed
function removeList(taskId, element) {
  const index = toDoList.findIndex((task) => task.id === taskId);
  if (index !== -1) {
    addList.splice(index, 1);
    element.remove();
  }
}


