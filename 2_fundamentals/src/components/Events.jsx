const Event = () => {

	const handleShowMessage = (e) => {
		alert('Seja bem vindo!!')
		console.log(e)
	}

	return (
		<>
			<div>
				{/* O evento normalmente vem sem os (), só utilizamos quando queremos que o evento ative automaticamente ao carregar a página */}
				<button onClick={handleShowMessage}>Mensagem boas-vindas!</button>
			</div>

			<div>
				{/* Quando formos utilizar uma função inline, precisamos utilizar dentro de uma arrow-function */}
				<button onClick={() => console.log('Funfou!')}>Evento inline</button> <br />

				{/* Não recomendado para funções mais complexas, segue um exemplo de má-prática*/}
				<button onClick={() => {
					const x = 0;
					const currentName = 'John Doe'

					if(x !== 1) {
						console.log(`Olá ${currentName}`)
					}
				}}>
					Má prática
				</button>
			</div>
		</>
	)
}

export default Event;