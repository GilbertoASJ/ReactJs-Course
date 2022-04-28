import ReusedComponent from './ReusedComponent'

// Criamos por padrão uma arrow-function, e para isso colocamos dentro de uma constante
const FirstComponent = () => {
	return (
		<div>
			<h3>My First component</h3>
			<p className="firsParagraph">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			</p>
			<ReusedComponent />
		</div>
	)
}

// Exportamos o component com o nome no qual iremos utilizar nas importações
export default FirstComponent;