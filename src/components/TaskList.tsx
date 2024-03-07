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
  Box,
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
    <Box
      width={[
        "100%", // 0-30em
        "100%", // 30em-48em
        "100%", // 48em-62em
        "100%", // 62em+
      ]}
    >
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
                <Button
                  colorScheme="whatsapp"
                  onClick={() => onDelete(task.id)}
                >
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TaskList;
