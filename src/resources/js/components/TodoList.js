"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const TodoList = () => {
    const todos = [{ id: 't1', text: 'テスト' }];
    return (react_1.default.createElement("ul", null, todos.map(todo => (react_1.default.createElement("li", { key: todo.id }, todo.text)))));
};
exports.default = TodoList;
