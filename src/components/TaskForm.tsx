import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "./categories";

const schema = z.object({
  description: z
    .string()
    .min(2, { message: "Description should be at least 2 characters." })
    .max(50),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required." }),
  }),
});

type TaskFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: TaskFormData) => void;
}

const TaskForm = ({ onSubmit }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TaskFormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mb={5} isInvalid={!!errors.description}>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Input
            placeholder="Add a new task"
            id="description"
            {...register("description")}
          />
          <FormErrorMessage>
            {errors.description && errors.description.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl mb={5} isInvalid={!!errors.category}>
          <FormLabel htmlFor="category">Category</FormLabel>
          <Select
            variant="filled"
            placeholder="Select a category"
            {...register("category")}
          >
            {categories.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </Select>
          <FormErrorMessage>
            {errors.category && errors.category.message}
          </FormErrorMessage>
        </FormControl>

        <Button mb={5} colorScheme="whatsapp" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export default TaskForm;
