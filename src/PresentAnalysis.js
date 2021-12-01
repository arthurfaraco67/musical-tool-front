import React, { useEffect } from "react";
import { Button } from "@mui/material";

export default function PresentAnalys({ firstStep, analysis, postAnalysis }) {
	const { name, group, music } = analysis;

	useEffect(() => {
		postAnalysis();
	});

	const handleSubmit = () => {
		firstStep();
	};

	return (
		<div className="form-container presenter">
			<h1>Análise submetida!</h1>

			<p>Nome: {name}</p>
			<p>Grupo: {group}</p>
			<p>Música: {music}</p>

			<Button variant="contained" color="secondary" onClick={handleSubmit} sx={{ mt: 4 }}>
				Analisar outra música
			</Button>
		</div>
	);
}
