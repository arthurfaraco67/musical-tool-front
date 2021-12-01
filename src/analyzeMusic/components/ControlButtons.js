import React from "react";
import { Button } from "@mui/material";

export default function ControlButtons({ disableControls, handlePlay, handlePause, handleReset }) {
	return (
		<div>
			<Button
				variant="contained"
				color="secondary"
				disabled={disableControls}
				onClick={handlePlay}
				sx={{ mr: 2 }}
			>
				Tocar
			</Button>
			<Button
				variant="contained"
				color="secondary"
				disabled={disableControls}
				onClick={handlePause}
				sx={{ mr: 2 }}
			>
				Pausar
			</Button>
			<Button variant="contained" color="secondary" disabled={disableControls} onClick={handleReset}>
				Resetar
			</Button>
		</div>
	);
}
