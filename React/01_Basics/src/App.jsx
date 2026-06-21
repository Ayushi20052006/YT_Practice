import "./App.css";

let count=0;
const increment=()=>{
  console.log("Increment button clicked");
  count+=1;
}
const decrement=()=>{
  console.log("Decrement button clicked");
  count-=1;
}
function App() {
  return (
    <>
      <h1>Counter</h1>
      <p>Count = {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
