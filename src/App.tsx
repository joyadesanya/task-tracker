import { useState } from "react";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Finish reading React.js Documentation",
      category: "Learning",
      status: "Completed",
    },
    {
      id: 2,
      description: "Do a 30-minute workout session",
      category: "Fitness",
      status: "Ongoing",
    },
    {
      id: 3,
      description: "Complete and submit the weekly coding challenge",
      category: "Work",
      status: "Completed",
    },
  ]);
  return (
    <TaskList
      tasks={tasks}
      onDelete={(id) => setTasks(tasks.filter((task) => task.id !== id))}
    />
  );
};

export default App;
