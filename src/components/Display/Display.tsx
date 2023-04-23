import React from 'react';
import s from './Display.module.css'

type DisplayPropsType = {
	count: number
	minValue: number
	maxValue: number
	btnSetting: boolean
	error: boolean
}

const Display = (props: DisplayPropsType) => {

	const isError = props.error || props.count >= props.maxValue - props.minValue
		? s.error
		: ''
	const fontDisplay = props.btnSetting ? s.bigfont : s.little

	const counterValue = props.error
		? 'incorrect value!'
		: props.btnSetting
			? props.count + props.minValue
			: `enter values and press 'set'`

	return (
		<h1 className={`${isError} ${fontDisplay}`}>{counterValue}</h1>
	);
};

export default Display;