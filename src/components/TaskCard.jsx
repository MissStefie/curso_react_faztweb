import {useContext} from 'react'
import { TaskContext } from '../context/TaskContext';

export default function TaskCard({ task }) {
  const {deleteTask} = useContext(TaskContext)
  return (
    <div className='bg-purple-300 text-purple-950 p-4 rounded-md'>
      <h1 className='text-2xl font-extrabold capitalize'>{task.title}</h1>
      <p className='text-purple-500 text-sm'>{task.descripcion}</p>
      <button className='bg-blue-300 px-2 py-1 rounded-lg mt-5 hover:bg-blue-600' onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
    </div>
  );
}
