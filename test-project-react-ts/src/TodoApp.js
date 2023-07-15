"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
var react_1 = require("react"); // hook
var react_2 = require("react"); // hook
var react_3 = require("react"); // hook
var TodoList_1 = require("./TodoList");
var uuid_1 = require("uuid"); // ( depr : ) import uuid from 'uuid/'
// const [todos, setTodos] = useState([])
//  - React Hook "useState" cannot be called at the top level. 
//    React Hooks must be called in a React function 
//    component or a custom React Hook function
var LOCAL_STORAGE_KEY = 'TodoApp.todos';
var BUTTON_FONT = 'Courier';
var TODO_STYLE = 'display: flex; \
  flex-direction: column; \
  justify-content: center; \
  align-items: center; \
  min-height: 100vh;';
function TodoApp() {
    var _a = (0, react_1.useState)([]), todos = _a[0], setTodos = _a[1]; // Hook
    /*
    const [todos, setTodos] = useState([
      {id: 1, name: '1', checked: 'true'},
      {id: 2, name: '2', checked: 'false'},
      {id: 3, name: 'abc', checked: 'false'},
      {id: 4, name: 'xyz', checked: 'false'}
    ])
    */
    var todoNameRef = (0, react_2.useRef)(); // Hook  
    (0, react_3.useEffect)(function () {
        var storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedTodos)
            setTodos(storedTodos);
    }, []);
    (0, react_3.useEffect)(function () {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);
    var handleAddTodo = function (e) {
        if (todoNameRef.current == undefined || todoNameRef.current.value === '')
            return;
        var name = todoNameRef.current.value;
        setTodos(function (prevTodos) {
            var id = (0, uuid_1.v4)();
            return __spreadArray(__spreadArray([], prevTodos, true), [
                {
                    id: id,
                    name: name,
                    checked: false
                }
            ], false);
        });
        // console.log(name)
        todoNameRef.current.value = null; // clear input field
    };
    function handleClearTodos() {
        var newTodos = todos.filter(function (item) { return !item.checked; });
        setTodos(newTodos);
    }
    var handleKeyDown = function (e) {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    };
    var toggleTodo = function (id) {
        var newTodos = __spreadArray([], todos, true);
        var todo = newTodos.find(function (todo) { return todo.id === id; });
        todo.checked = !todo.checked;
        setTodos(newTodos);
    };
    return ({ /* <TodoList todos={todos}/> */}
        < TodoList_1["default"]);
    todos = { todos: todos };
    toggleTodo = { toggleTodo: toggleTodo }
        /  >
        type;
    'text';
    ref = { todoNameRef: todoNameRef };
    onKeyDown = { handleKeyDown: handleKeyDown };
    placeholder = 'type something ...'
        /  >
        onClick;
    {
        handleAddTodo;
    }
    style = {};
    {
        fontFamily: BUTTON_FONT;
    }
}
    >
        +JOB
    < /button>
    < button;
onClick = { handleClearTodos: handleClearTodos };
style = {};
{
    fontFamily: BUTTON_FONT;
}
    >
        -All
    < /button>;
{ /* Draft :: */ }
{ /* <div>0 Jobs Pending</div> */ }
{ /* does not seem to work :: */ }
{ /* <div style={{ TODO_STYLE }}> {} */ }
 & nbsp;
 & nbsp;
 & nbsp;
 & nbsp;
{
    todos.filter(function (item) { return !item.checked; }).length;
}
Jobs;
Pending
    < /div>
    < />;
exports["default"] = TodoApp;
