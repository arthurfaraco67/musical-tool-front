import React, { useEffect } from 'react';
import useInputState from './hooks/useInputState';
import { TextField, Button } from '@mui/material';

export default function IdentificationForm(props) {
	const [ name, updateName ] = useInputState('');
	const [ group, updateGroup ] = useInputState('');

	useEffect(
		() => {
			document.title = `Hello ${name}`;
		},
		[ name ]
	);

	const handleSubmit = () => {
		props.updateAnalysis({ name, group });
		props.nextStep();
	};

	return (
		<div>
			<h1>
				Nome: {name} - Grupo: {group}
			</h1>
			<TextField
				id='name'
				type='text'
				value={name}
				onChange={updateName}
				label='Nome'
				variant='standard'
				color='secondary'
			/>
			<TextField
				id='group'
				type='text'
				value={group}
				onChange={updateGroup}
				label='Grupo'
				variant='standard'
				color='secondary'
			/>
			<Button variant='contained' color='secondary' onClick={handleSubmit}>
				Próximo
			</Button>
		</div>
	);
}
