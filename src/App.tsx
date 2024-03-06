import { useState } from "react";
import TaskList from "./components/TaskList";
import TaskFilter from "./components/TaskFilter";
import { Box } from "@chakra-ui/react";
import TaskForm from "./components/TaskForm";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Finish reading React.js Documentation",
      category: "Learning",
    },
    {
      id: 2,
      description: "Do a 30-minute workout session",
      category: "Fitness",
    },
    {
      id: 3,
      description: "Complete and submit the weekly coding challenge",
      category: "Work",
    },
  ]);

  const [selectedcategory, setSelectedCategory] = useState("");

  const visibleTasks = selectedcategory
    ? tasks.filter((task) => task.category === selectedcategory)
    : tasks;

  return (
    <>
      <Box>
        <TaskForm
          onSubmit={(newTask) =>
            setTasks([...tasks, { ...newTask, id: tasks.length + 1 }])
          }
        />
        <TaskFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />

        <TaskList
          tasks={visibleTasks}
          onDelete={(id) => setTasks(tasks.filter((task) => task.id !== id))}
        />
      </Box>
    </>
  );
};

export default App;
