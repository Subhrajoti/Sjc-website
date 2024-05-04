console.log("Hello Vistors");

// Guess Game:
let guessedNum = document.getElementById("guessNum");
let randomNumber = Math.ceil(Math.random() * 100);
let guess = document.getElementById("guessNum").value;

function checkNum() {
    let guessedNumber = parseInt(guessedNum.value);
    if (randomNumber < guessedNumber) {

        document.getElementById("messagePara").innerText = "Too High, Try Again";
        document.getElementById("messagePara").style.backgroundColor = "red";
        document.getElementById("messagePara").style.fontWeight = "bold";
    } else if (randomNumber > guessedNumber) {

        document.getElementById("messagePara").innerText = "Too Low, Try Again";
        document.getElementById("messagePara").style.backgroundColor = "red";
        document.getElementById("messagePara").style.fontWeight = "bold";
    } else if (randomNumber === guessedNumber) {
        document.getElementById("messagePara").innerHTML = "Congratulation, Right Guess!";
        document.getElementById("messagePara").style.backgroundColor = "yellow";
        document.getElementById("messagePara").style.fontWeight = "bold";
    } else {

        alert("Give Some inputs!");
    }
}
// test:
var button1 = document.getElementById("button");

function changeColor() {
    button1.style.textDecoration = "underline";
    button1.style.width = "170px";
    button1.style.margin = "0px 5px 0px 0px";
    button1.style.boxShadow = "1px 2px 10px 5px white"
}

function resetColor() {
    button1.style.textDecoration = "";
    button1.style.width = "";
    button1.style.margin = "";
    button1.style.boxShadow = ""

}

function scrollToTop() {
    window.scrollTop(0);
}

// testing :

let header = document.getElementById("testHeader");
let testImage = document.getElementById("testImage");

header.addEventListener("click", function() {
    testImage.style.marginTop = "78px";


})
let i = window.addEventListener("scroll", function() {
    const scrollValue = window.scrollY;
    return scrollValue
    console.log(scrollValue)
});


if (i === 0) {

    testImage.style.marginTop = "0px";

}
// todoProject:
let todoList = [{
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JavaScript",
        uniqueNo: 3
    }
];
let createAndAppendTodo = (todo) => {
    let todoItemsContainer = document.getElementById("todoItemsContainer");
    todoItemsContainer.style.listStyleType = "none";
    let todoElement = document.createElement("li");
    todoElement.classList.add("d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);
    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    let inputId = "inputId" + todo.uniqueNo;
    inputElement.id = inputId;
    todoElement.appendChild(inputElement);
    let labelElement = document.createElement("label");
    let labelContainer = document.createElement("div");
    todoElement.appendChild(labelContainer);
    labelContainer.classList.add("label-container", "p-2", "m-2", "d-flex", "flex-row");
    labelElement.setAttribute("for", inputId);
    labelElement.textContent = todo.text;
    labelContainer.appendChild(labelElement);
    let delIconContainer = document.createElement("div");
    delIconContainer.classList.add("ml-auto");
    labelContainer.appendChild(delIconContainer);
    let delIcon = document.createElement("i");
    delIcon.classList.add("fa", "fa-trash");
    delIconContainer.appendChild(delIcon);
    let oninput = () => {
        labelElement.classList.toggle("line-through");
    };
    inputElement.onclick = () => {
        oninput();
    };
    let onDel = () => {
        todoItemsContainer.removeChild(todoElement);
    };
    delIcon.onclick = () => {
        onDel();
    };
};
for (let todos of todoList) {
    createAndAppendTodo(todos);
}
let addButton = document.getElementById("addTodoButton");
let userInput = document.getElementById("todoUserInput");

let addTodo = () => {
    let userInput = document.getElementById("todoUserInput");
    let userText = userInput.value;
    let count = todoList.length;
    count = count + 1;
    let todo = {
        text: userText,
        uniqueNo: count
    };
    if (userText === "") {
        alert("Give proper Input");
    } else {
        createAndAppendTodo(todo);
    }
};
addButton.onclick = () => {
    addTodo();
};
