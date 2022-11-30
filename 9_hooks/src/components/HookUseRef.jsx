import { useRef, useState, useEffect } from 'react';

const HookUseRef = () => {

	// 1 - useRef
	const numberRef = useRef(0);
	const [counter, setCounter] = useState(0);
	const [counterB, setCounterB] = useState(0);

	useEffect(() => {

		// Com o useRef o hook não atualiza infitamente, se fosse useState ele faria isso
		numberRef.current = numberRef.current + 1;
	})

	// 2 - useRef e DOM
	const inputRef = useRef();
	const [email, setEmail] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();

		setEmail('');
		inputRef.current.focus();
	}

	return (
		<>
			<hr />
			{/* 1 - useRef */}
			<h3>use Ref</h3>
			<p>O componente renderizou {numberRef.current} vezes.</p>
			<p>Contador 1: {counter}</p>
			<button onClick={() => {setCounter(counter + 1)}}>
				Incrementar Contador 1
			</button>
			<p>Contador 2: {counterB}</p>
			<button onClick={() => {setCounterB(counterB + 1)}}>
				Incrementar Contador 2
			</button>

			{/* 2 - useRef e DOM */}
			<form className="useRefForm" onSubmit={handleSubmit} style={{marginTop: '16px'}}>
				<label>
					E-mail:
					<input 
						type="email" 
						ref={inputRef} 
						value={email} 
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<input type="submit" value="Enviar" />
			</form>
		</>
	)
}

export default HookUseRef;