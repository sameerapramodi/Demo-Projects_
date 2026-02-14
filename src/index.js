"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let todos = [];
function addTodo(task) {
    const newTodo = {
        id: Date.now(),
        task,
        completed: false
    };
    todos.push(newTodo);
    console.log("✅ Task added:", task);
}
function listTodos() {
    console.log("\n📋 Your Tasks:");
    todos.forEach(todo => {
        console.log(`${todo.id} - ${todo.task} [${todo.completed ? "Done" : "Pending"}]`);
    });
}
function completeTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = true;
        console.log("✔ Task completed!");
    }
    else {
        console.log("❌ Task not found");
    }
}
// Demo
addTodo("Learn TypeScript");
addTodo("Build ToDo App");
listTodos();
if (todos.length > 0) {
    completeTodo(todos[0].id);
}
listTodos();
//# sourceMappingURL=index.js.map