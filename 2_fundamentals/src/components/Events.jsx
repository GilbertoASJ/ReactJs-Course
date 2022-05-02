const Event = () => {

	const handleShowMessage = (e) => {
		alert('Seja bem vindo!!')
		console.log(e)
	}

	const renderSomething = (x) => {

		if(x) {

			return <h3>renderSomething funcionando!</h3>
		} else {

			return <h3>renderSomething não está funcionando =(</h3>
		}
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

			<div>
				
				{/* Algo que também pode existir no react é função de renderização, onde podemos criar uma função que retorna jsx ou seja, retorna html */}
				{renderSomething(true)}
				{renderSomething(false)}
			</div>
		</>
	)
}

export default Event;