import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TaskRequests from "./clickup_api/task_requests";

function App() {
  return (
    <div className="App">
      <TaskRequests />
    </div>
  );
}

export default App;
