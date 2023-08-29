import React from 'react';
import { useSelector } from 'react-redux';


const TotalCompleteItems = () => {

	const todo =  useSelector((state)=>state.todo.filter(item => item.completed === true) )

	let totalItems = todo.length

	return <h4 className='mt-3'>Total Complete Items: {totalItems}</h4>;
};

export default TotalCompleteItems;
