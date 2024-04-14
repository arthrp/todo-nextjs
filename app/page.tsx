"use client";
import React, { useState } from 'react';
import { Todo as TodoType } from '../types/todo';
import { Todo } from '../components/Todo';

export default function HomePage() {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    console.log('fuck');
    if (inputText.trim() !== '') {
      const newTodo: TodoType = {
        id: Date.now(), // simple unique ID
        text: inputText,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
      setInputText(''); // clear the input after adding
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <input
        type="text"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button onClick={addTodo} className="btn-add-todo">Add Todo</button>
      <div>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
}
