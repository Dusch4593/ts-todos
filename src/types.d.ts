interface TodoProps {
    id: number
    text: string
    done: boolean
  }

type ToggleTodoProps = (selectedTodo: TodoProps) => void