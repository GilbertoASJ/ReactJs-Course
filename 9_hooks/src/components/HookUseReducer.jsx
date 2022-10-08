import { useReducer, useState } from 'react';

const HookUserReducer = () => {

	// 1 - começando com o useReducer
	const [number, dispatch] = useReducer((state, action) => {

		return Math.random(state);
	});

	// ----------------------------- //

	// 2 - avançado com o useReducer
	const initialTasks = [
		{id: 1, text: 'Ir ao mercado'},
		{id: 2, text: 'Limpar computador'}
	]

	const taskReducer = (state, action) => {

		switch(action.type) {
			case 'ADD':
				const newTask = {
					id: Math.random(),
					text: taskText
				}

				setTaskText('');

				return [...state, newTask]
				break;

			case 'DELETE':

				return state.filter((task) => {task.id !== action.id})
				break;

			default:

				return state;
				break;
		}
	}

	const [taskText, setTaskText] = useState("");
	const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);
	
	const handleSubmit = (e) => {

		e.preventDefault();

		dispatchTasks({type: 'ADD'})
	}

	const removeTask = (id) => {

		dispatchTasks({type: 'DELETE', id: id})
	}

	return (
		<>
			<h3>Use Reducer</h3>
			<p>Número: {number}</p>
			<button onClick={dispatch}>Alterar número</button>
			<hr />

			<h3>Todo List:</h3>

			<form onSubmit={handleSubmit}>
				<input 
					type="text" 
					onChange={(e) => setTaskText(e.target.value)} 
					value={taskText} 
				/>
				<input type="submit" value="Enviar" />
			</form>

			{tasks.map((task) => (

				<li key={task.id} onDoubleClick={() => removeTask(task.id)}>
					{task.text}
				</li>
			))}
		</>
	)
}

export default HookUserReducer;