import React, {useState} from 'react';
import Todolist from './Todolist'
import './App.css';

const App = (event)=> {
	const [inputList, setInputList] = useState("");
	const [Items, setItems] = useState([]);
	
	const itemEvents = (event)=>{
		setInputList(event.target.value);
	}
	const listOfItems = ()=>{
		setItems((oldItems)=>{
			return [...oldItems, inputList];
		})
		setInputList('')
	}
	const deleteItems = (id)=>{
		setItems((oldItems)=>{
			return oldItems.filter((arrElem, index)=>{
				return index!==id;
			})
		})
	}
	
  return (
    <>
	  <div className="main__div">
	  	<div className="center__div">
			<br />
			<h1>Todo List</h1>
			<br />
			<input type="text" placeholder="Add items" onChange={itemEvents} value={inputList}/>
			<button onClick={listOfItems}> + </button>
			
			<ol>
				{ Items.map((itemval, index)=>{
					return <Todolist key={index} id={index} text={itemval} onSelect={deleteItems} />
				})}
			</ol>
		</div>
	  </div>
	</>
  );
}

export default App;
