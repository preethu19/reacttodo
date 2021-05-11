import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import './App.css';
import Todolist from './Todolist';

const Todo = ()=>{
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

	return(
	<>
		<div className="main__div">
	  	<div className="center__div">
			<br />
			<h1>Todo List</h1>
			<br />
			<input type="text" placeholder="Add items" onChange={itemEvents} value={inputList}/>
			<Button id="button" onClick={listOfItems}><AddIcon /></Button>
			<ol>
				{ Items.map((itemval, index)=>{
					return <Todolist key={index} text={itemval} />
				})}
			</ol>
		</div>
		</div>
	</>
	);
}

export default Todo;