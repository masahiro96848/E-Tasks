"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TodoList_1 = __importDefault(require("./components/TodoList"));
const App = () => {
    return react_1.default.createElement("div", { className: 'app' },
        react_1.default.createElement("div", null, "\u3042\u3042\u3042\u3042\u3042\u3042"),
        react_1.default.createElement(TodoList_1.default, null));
};
exports.default = App;
