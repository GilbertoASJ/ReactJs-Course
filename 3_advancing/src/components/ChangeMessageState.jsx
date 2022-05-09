const ChangeMessageState = ({ handleSetMessage }) => {

	// Mensagem fictícias pré-cadastradas
	const fictionalMessages = ['Olá', 'Olá tudo bem?', 'Eai como vai?']

	return (
		<div>
			<button onClick={() => handleSetMessage(fictionalMessages[0])}>
				Mensagem 1
			</button>
			<button onClick={() => handleSetMessage(fictionalMessages[1])}>
				Mensagem 2
			</button>
			<button onClick={() => handleSetMessage(fictionalMessages[2])}>
				Mensagem 3
			</button>
		</div>
	)
}

export default ChangeMessageState;