"use client";
import { Todo as TodoType } from '../types/todo';

interface TodoProps {
  todo: TodoType;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export const Todo = ({ todo, toggleTodo, deleteTodo } : TodoProps) => {
  return (
    <div className="mb-2.5">
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => toggleTodo(todo.id)}
        className="mr-2"
      />
      <span className="todo-item" style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>{todo.text}</span>
      <button className="btn btn-red ml-2.5" onClick={() => deleteTodo(todo.id)}>
        Delete
      </button>
    </div>
  );
};