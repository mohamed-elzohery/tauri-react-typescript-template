import React, { useState, ChangeEvent } from "react";
import "./App.css";

function App() {
	const [name, setName] = useState("");

	return (
		<div className="container">
			<input 
				value={name}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value)}
			/>
			<p>{name}</p>
		</div>
	);
}

export default App;
