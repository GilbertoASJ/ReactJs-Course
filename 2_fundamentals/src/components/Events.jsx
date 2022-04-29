const Event = () => {

	const handleShowMessage = (e) => {
		alert('Seja bem vindo!!')
		console.log(e)
	}

	return (
		<>
			<div>
				{/* O evento normalmente vem sem os (), só utilizamos quando queremos que o evento ative automaticamente ao carregar a página */}
				<button onClick={handleShowMessage}>Clique aqui!</button>
			</div>
		</>
	)
}

export default Event;