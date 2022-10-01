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

	}

	const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);
	const [taskText, setTaskText] = useState("");

	const handleSubmit = (e) => {

		e.preventDefault();

		dispatchTasks()
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

				<li key={task.id}>
					{task.text}
				</li>
			))}
		</>
	)
}

export default HookUserReducer;