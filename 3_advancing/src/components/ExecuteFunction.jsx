// Sempre quando formos receber algo por props, precisamos desestruturar utilizando um objeto
const ExecuteFuncion = ({ myFunction }) => {

	return (
		<div>
			<button onClick={myFunction}>
				Exibir mensagem de boas vindas
			</button>
		</div>
	)
}

export default ExecuteFuncion;