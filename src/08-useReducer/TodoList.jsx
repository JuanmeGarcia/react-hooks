import { TodoItem } from "./TodoItem"


export const TodoList = ({ children}) => {
  
  return (
    <ul className="list-group">
      {children}
    </ul>
  )
}
