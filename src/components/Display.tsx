import React from 'react';

type DisplayPropsType ={
	count: number
}

const Display = (props:DisplayPropsType) => {

	const isError = props.count >= 5 ? 'table-block_error' : ''

	return (
		<h1 className={isError}>{props.count}</h1>
	);
};

export default Display;