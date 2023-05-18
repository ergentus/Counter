import React from 'react'
import s from './Display.module.css'
import {useSelector} from 'react-redux'
import {AppStateType} from '../../redux/redux-store'

type DisplayPropsType = {
	value: number
	isSet: boolean
	min: number
	max: number
}

const Display = (props: DisplayPropsType) => {

	const error = useSelector<AppStateType, boolean>(state => state.counter.isError)


	const isError = error || props.value >= props.max - props.min ? s.error : ''
	const fontDisplay = props.isSet ? s.bigfont : s.little

	const counterValue = error
		? 'incorrect value!'
		: (props.isSet && (props.value + props.min).toString()) || `enter values and press 'set'`

	return (
		<h1 className={`${isError} ${fontDisplay}`}>{counterValue}</h1>
	)
}

export default Display