import WorkspaceImage from '../assets/Workspace.jpg'

const ImagesTypes = () => {

	return (
		<>
			<div className="imagesDiv">
				{/* Imagem em public, para ter acesso é simples, basta colocar '/nomeDaImagem.jpg' */}
				<img 
					height="250" 
					src="Nature.jpg" 
					alt="Imagem da natureza" 
					style={{marginRight: `${32}px`}}
				/>

				{/* Imagem em asset */}
				<img height="250" src={WorkspaceImage} alt="Área de trabalho" />
			</div>
		</>
	)
}

export default ImagesTypes;