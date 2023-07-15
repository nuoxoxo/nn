"use strict";
exports.__esModule = true;
function Todo(_a) {
    var todo = _a.todo, toggleTodo = _a.toggleTodo /*2nd arg is a func*/;
    var handleTodoCheck = function () {
        toggleTodo(todo.id);
    };
    return type = 'checkbox';
    checked = { todo: todo, : .checked };
    onChange = { handleTodoCheck: handleTodoCheck }
        /  >
        { todo: todo, : .name }
        < /label>
        < /div>;
}
exports["default"] = Todo;
