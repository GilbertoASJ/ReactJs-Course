import { useMemo, useState, useEffect } from 'react';

const HookUseMemo = () => {

	const [numbers, setNumbers] = useState(0);

	// Com erro - const premiumNumbers = ['0', '100', '200'];

	const premiumNumbers = useMemo(() => {

		return ['0', '100', '200'];

	}, []);

	useEffect(() => {

		console.log('premiumNumbers Foi alterado')

	}, [premiumNumbers])

	return (
		<>
			<hr />
			<h3>useMemo</h3>
			<input type="number" onChange={(e) => setNumbers(e.target.value)} />
			{
				premiumNumbers.includes(numbers) ? 
				<p>Acertou o número :D</p> : 
				<p>Não foi dessa vez :( </p>
			}
		</>
	)
}

export default HookUseMemo;