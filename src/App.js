import styles from "./App.module.css";
import { useEffect, useState } from "react";

function Hello() {
  // function byeFn() {
  //   console.log("bye ");
  // }
  // function hiFn() {
  //   console.log("hi");
  //   return byeFn;
  // }
  // useEffect(hiFn, []);
  useEffect(() => {
    console.log("creating Hello");
    return () => console.log("destroying Hello");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
	const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(true);
	const onClick = () => setCounter((prev) => prev + 1);
	const onChange = (event) => {
		setKeyword(event.target.value);
	};
	// watch the keyword
  useEffect(() => {
    if (keyword === "" || keyword.length < 5) return;
		console.log("searching for", keyword);
  }, [keyword]);
  // watch the counter
  useEffect(() => {
		console.log(" counter ",  counter);
  }, [counter]);
  
	return (
    <div className="App">
      <button onClick={() => setShowing((prev) => !prev)}>Toggle</button>
      {showing ? <Hello /> : null }
			<input
				onChange={onChange}
				type="text"
				value={keyword}
				placeholder="search here..."
			/>
			<h1 className={styles.title}>{counter}</h1>
			<button onClick={onClick} >Click me</button>
		</div>
	);
}

export default App;
