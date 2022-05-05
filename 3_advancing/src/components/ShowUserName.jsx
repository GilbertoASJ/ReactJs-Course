// Utilizando o nome props (convenção), temos acesso a todas as propriedades passadas para este componente por meio de um objeto
const ShowUserName = (props) => {

	return (
		<>
			<h3>O nome do usuário é: {props.userName}</h3>
		</>
	)
}

export default ShowUserName;