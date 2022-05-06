const Container = ({children, testValue}) => {

	return (
		<>	
			<h3>Container</h3>
			{children}<span><strong>{testValue}</strong></span>
		</>
	)
}

export default Container;