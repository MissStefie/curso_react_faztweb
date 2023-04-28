import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-yellow-100 h-screen">
      <div className="mx-auto p-10">
        <TaskForm></TaskForm>
        <hr></hr>
        <TaskList></TaskList>
      </div>
    </main>
  );
}

export default App;
