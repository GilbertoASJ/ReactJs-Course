const Challenge = () => {

	const fictionalNumbers = {
		x: 10,
		y: 17
	}

	const sumFictionalNumbers = () => {
		console.log(fictionalNumbers.x + fictionalNumbers.y)
	}

	return (
		<>
			<p>
				<strong>Números fictícios:</strong> {fictionalNumbers.x}, {fictionalNumbers.y}
			</p>
			<button type="button" onClick={sumFictionalNumbers}>
				Somar os números fictícios
			</button>
		</>
	)
}

export default Challenge;