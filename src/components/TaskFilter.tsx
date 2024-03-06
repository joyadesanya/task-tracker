import categories from "./categories";
import { Select } from "@chakra-ui/react";

interface Props {
  onSelectCategory: (category: string) => void;
}

const TaskFilter = ({ onSelectCategory }: Props) => {
  return (
    <Select
      padding="10px"
      placeholder="All Categories"
      mb={10}
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      {categories.map((category) => (
        <option value={category}>{category}</option>
      ))}
    </Select>
  );
};

export default TaskFilter;
