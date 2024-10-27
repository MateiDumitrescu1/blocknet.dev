import { useState } from "react";

import "./App.css";
import "./index.css";
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className="flex justify-center mt-3">
				<h1 className="inline text-5xl text-yellow-100">Block</h1>
				<h1 className="inline text-5xl italic text-yellow-100">Net</h1>
			</div>
			<div className="flex justify-center mt-3">
				<h2 className="block text-white">
					Blockchain aimed at storing Neural Network weights and
					hyperparameters
				</h2>
			</div>
			<div className="flex justify-center mt-3">
				<h2 className="block text-yellow-100">Coming soon...</h2>
			</div>
		</>
	);
}

export default App;
