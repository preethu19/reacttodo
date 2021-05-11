import React, {useState} from 'react';

const Todolist = (props)=>{
	const [line, setLine] = useState(false);
	const cutIt = ()=>{
		setLine(true)
	}
	
	return (
		<>
			<div className="todo__style">
				<i className="fa fa-times" area hidden="true" onClick={cutIt} />	
				<li style={{textDecoration: line? "line-through": 'none'}}>{props.text}</li>
			</div>
		</>
	)

}

export default Todolist;