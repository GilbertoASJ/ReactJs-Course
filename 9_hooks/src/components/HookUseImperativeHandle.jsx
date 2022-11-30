import { useRef } from 'react';

import SomeComponent from './SomeComponent';

const HookUseImperativeHandle = () => {

	const inputRef = useRef();

	return (
		<>
			<hr />
			<h3>useImperativeHandle</h3>
			<SomeComponent ref={inputRef} />

			<button onClick={() => {inputRef.current.validate()}}>Validar</button>
		</>
	)
}

export default HookUseImperativeHandle;