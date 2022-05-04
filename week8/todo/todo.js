
function startTodo() {

}

let numberOfTasks = 0;
let openTasks = 0;

function addTodo() {
    numberOfTasks++;
    openTasks++;

    console.log("open tasks:" + openTasks);

    const container = document.getElementById("todoContainer");
    container.innerHTML +=  `
        <tr>
            <td>
                <label for="todoText${numberOfTasks}">First todo</label>
                <input for="todoText${numberOfTasks}" type="text">
            </td>
            <td>
                <label for="todoDone${openTasks}">First todo</label>
                <input id="todoDone${openTasks}" type="checkbox"></td>
            </td>
        </tr>`;

}
