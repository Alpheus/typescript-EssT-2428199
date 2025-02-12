var todoItems = [
    { id: 1, title: "Learn HTML", status: "done", completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: "in-progress" },
    { id: 3, title: "Write the best app in the world", status: "todo" },
];
function addTodoItem(todo) {
    var id = getNextId(todoItems);
    var newTodo = {
        id: id,
        title: todo,
        status: "todo"
    };
    todoItems.push(newTodo);
    return newTodo;
}
function getNextId(items) {
    return items.reduce(function (max, x) { return x.id > max ? max : x.id; }, 0) + 1;
}
var newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app");
console.log(JSON.stringify(newTodo));
