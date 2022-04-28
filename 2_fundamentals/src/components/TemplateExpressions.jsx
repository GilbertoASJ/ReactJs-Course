const TemplateExpressions = () => {

	const userName = "John Doe"

	const data = {
		age: 19,
		job: 'programador',
		address: {
			city: 'São Paulo',
			uf: 'SP'
		}
	}

	return (
		<>
			<p>Olá, seja bem vindo <strong>{userName}</strong>!!</p>
			<p>Você atua como: {data.job}, e tem {data.age} anos.</p>

			{/* Também podemos imprimir dados de variáveise e podemos executar js normalmente */}
			{console.log('Jsx')}
		</>
	)
}

export default TemplateExpressions;