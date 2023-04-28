import React from "react";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const { createTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, descripcion });
    setTitle("");
    setDescripcion("");
  };

  return (
    <div className="max-w-md mx-auto"> 
      <form onSubmit={handleSubmit} className="bg-purple-300 mb-2 p-10">
        <h1 className="text-purple-950 text-lg font-bold mb-3">Registra tu tarea</h1>

        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-cyan-200 p-3 w-full mb-2"
        ></input>

        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
          className="bg-cyan-200 p-3 w-full mb-2"
        ></textarea>

        <button className='bg-blue-300 px-2 py-1 rounded-lg mt-5 hover:bg-blue-600'>Guardar</button>
      </form>
    </div>
  );
}
