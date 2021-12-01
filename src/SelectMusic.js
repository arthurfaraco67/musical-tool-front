import React from "react";
import useInputState from "./hooks/useInputState";

import { Button, MenuItem, FormControl, Select } from "@mui/material";

export default function SelectMusic({ songs, nextStep, updateAnalysis }) {
	const [ music, updateMusic ] = useInputState(songs[0].music);

	const handleSubmit = () => {
		updateAnalysis({ music });
		nextStep();
	};

	return (
		<div className="form-container">
			<h1>Selecione uma música</h1>
			<FormControl variant="standard" sx={{ m: 1, minWidth: 80, borderColor: "secondary.main" }}>
				<Select
					labelId="demo-simple-select-autowidth-label"
					id="demo-simple-select-autowidth"
					value={music}
					onChange={updateMusic}
					autoWidth
					label="Music"
					sx={{ color: "secondary.main" }}
				>
					{songs.map((song, index) => (
						<MenuItem key={index} value={song.music} sx={{ color: "secondary.main" }}>
							{song.music}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<Button variant="contained" color="secondary" onClick={handleSubmit} sx={{ mt: 4 }}>
				Iniciar
			</Button>
		</div>
	);
}
