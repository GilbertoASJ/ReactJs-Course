const Fragment = () => {

	// O Fragment basicamente, é um elemento HTML vazio, o React necessita de um elemento em volta dos outros para que não ocorra nenhum erro, porém utilizar divs pode acarretar em quebra de layout e até mesmo um CSS desnecessário, por isso o Fragment é uma ótima opção

	return (
		<>
			<h2>Título Principal</h2>
			<h3>Título Secundário</h3>
		</>
	)
}

export default Fragment;