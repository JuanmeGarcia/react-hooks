import { useTodos } from '../hooks'
import { TodoAdd } from './TodoAdd'
import { TodoItem } from './TodoItem'
import { TodoList } from './TodoList'

export const TodoApp = () => {
	const {
		todos,
		todosCount,
		pendingTodosCount,
		handleDeleteTodo,
		handleToggleTodo,
		handleNewTodo,
	} = useTodos()

    const renderTodos = todos.map(todo => (
        <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
        />
    ))

	return (
		<>
			<h1>
				TodoApp: {todosCount},{' '}
				<small>pendientes: {pendingTodosCount}</small>{' '}
			</h1>
			<hr />

			<div className="row">
				<div className="col-7">
					<TodoList>
                        {renderTodos}
					</TodoList>
				</div>

				<div className="col-5">
					<h4>Agregar TODO</h4>
					<hr />
					<TodoAdd onNewTodo={handleNewTodo} />
				</div>
			</div>
		</>
	)
}
