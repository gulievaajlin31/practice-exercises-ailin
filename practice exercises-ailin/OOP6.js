class TodoItem {
    constructor(title) {
        this.title = title;
        this.completed = false; // Default to false
    }

    toggle() {
        this.completed = !this.completed; // Flips boolean state
    }
}

class TodoList {
    constructor(name) {
        this.name = name;
        this.items = []; // Initialized as an empty array
    }

    addItem(title) {
        const newItem = new TodoItem(title);
        this.items.push(newItem);
        return newItem;
    }

    getCompleted() {
        return this.items.filter(item => item.completed);
    }

    getPending() {
        return this.items.filter(item => !item.completed);
    }

    removeCompleted() {
        this.items = this.items.filter(item => !item.completed);
    }
}

const myTodoList = new TodoList("Personal Goals");

myTodoList.addItem("Learn JavaScript ES6 Classes");
myTodoList.addItem("Master OOP Principles");
myTodoList.addItem("Build a Portfolio Project");

console.log(`--- ${myTodoList.name} ---`);
console.log("Initial Pending Count:", myTodoList.getPending().length); // 3

myTodoList.items[0].toggle(); // Complete "Learn JavaScript ES6 Classes"
myTodoList.items[2].toggle(); // Complete "Build a Portfolio Project"

console.log("Completed items:", myTodoList.getCompleted().map(item => item.title)); 
// Output: [ 'Learn JavaScript ES6 Classes', 'Build a Portfolio Project' ]

console.log("Pending items:", myTodoList.getPending().map(item => item.title)); 
// Output: [ 'Master OOP Principles' ]

myTodoList.removeCompleted();
console.log("Remaining items after cleaning completed:", myTodoList.items.map(item => item.title)); 
// Output: [ 'Master OOP Principles' ]