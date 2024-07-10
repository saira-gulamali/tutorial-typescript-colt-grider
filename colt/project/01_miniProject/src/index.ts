interface Todo {
  text: string;
  completed: boolean;
}

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

//different syntax
//(<HTMLInputElement>input).value

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) {
    return [];
  }
  return JSON.parse(todosJSON);
}

// btn.addEventListener("click", function () {
//   alert(input.value);
//   input.value = "";
// });

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("submitted");
// });
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  createTodo(newTodo);
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
  input.value = "";
  console.log(todos);
}

function createTodo(todo: Todo): void {
  const newLI = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", function () {
    todo.completed = checkbox.checked;
    saveTodos();
  });
  newLI.append(todo.text);
  newLI.append(checkbox);
  list.append(newLI);
}

form.addEventListener("submit", handleSubmit);
