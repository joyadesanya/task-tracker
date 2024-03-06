import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  Checkbox,
} from "@chakra-ui/react";

interface Task {
  id: number;
  description: string;
  category: string;
}

interface Props {
  tasks: Task[];
  onDelete: (id: number) => void;
}

const TaskList = ({ tasks, onDelete }: Props) => {
  return (
    <Table>
      <TableCaption textAlign="left">Tasks List</TableCaption>
      <Thead>
        <Tr>
          <Th>Description</Th>
          <Th>Category</Th>
          <Th>Status</Th>
        </Tr>
      </Thead>

      <Tbody>
        {tasks.map((task) => (
          <Tr key={task.id}>
            <Td>{task.description}</Td>
            <Td>{task.category}</Td>
            <Td>
              <Checkbox>Completed</Checkbox>
            </Td>
            <Td>
              <Button colorScheme="whatsapp" onClick={() => onDelete(task.id)}>
                Delete
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default TaskList;
