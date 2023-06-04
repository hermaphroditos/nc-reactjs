import { useState } from "react";

function App() {
	const [toDo, setToDo] = useState([]);
	const [toDos, setToDos] = useState([]);
	const onChange = (event) => setToDo(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		if (toDo === "") {
			return;
		}
		const toDoObj = {
			text: toDo,
			id: Date.now(),
		};
		setToDos((currentArray) => [...currentArray, toDoObj]);
		setToDo("");
	};
	return (
		<div className="App">
			<h1> hello</h1>
			<form onSubmit={onSubmit}>
				<input
					value={toDo}
					onChange={onChange}
					type="text"
					placeholder="write your todo"
				/>
				<button type="submit">Add</button>
			</form>
			<hr />
			<div>
				<h1>Todo List</h1>
				<ul>
					{toDos.map((toDoObj, index) => (
						<li key={toDoObj.id}>{toDoObj.text}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
export default App;
