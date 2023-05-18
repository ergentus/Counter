import React, {ChangeEvent} from 'react'
import SuperButton from '../SuperButton/SuperButton'
import {ButtonNamesFilterType} from '../../App'
import s from './DefaultSettings.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {setErrorAC, setMaxAC, setMinAC, setResetAC, setSettingsAC} from '../../redux/count-reducer'
import {AppStateType} from '../../redux/redux-store'

type DefaultSettingsPropsType = {
	name: ButtonNamesFilterType
	callBack: (name: ButtonNamesFilterType) => void
	isSet: boolean
	min: number
	max: number
}

export const DefaultSettings = (props: DefaultSettingsPropsType) => {
	const error = useSelector<AppStateType, boolean>(state => state.counter.isError)
	const dispatch = useDispatch()
	const isMinMaxValid = (min: number, max: number) => min >= 0 && max > min

	const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const maxValue = +e.currentTarget.value
		if (isMinMaxValid(props.min, maxValue)) {
			dispatch(setMaxAC(maxValue))
			dispatch(setSettingsAC(false))
			dispatch(setResetAC())
			dispatch(setErrorAC(false))
		} else {
			dispatch(setMaxAC(maxValue))
			dispatch(setErrorAC(true))
		}
	}
	const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const minValue = +e.currentTarget.value
		if (isMinMaxValid(minValue, props.max)) {
			dispatch(setMinAC(minValue))
			dispatch(setSettingsAC(false))
			dispatch(setResetAC())
			dispatch(setErrorAC(false))
		} else {
			dispatch(setMinAC(minValue))
			dispatch(setErrorAC(true))
		}
	}

	const errorRed = error ? s.red : ''

	return (
		<>
			<div className={s.table}>
				<div className={s.item}>
					max value:
					<input
						className={errorRed}
						type="number"
						value={props.max}
						onChange={onChangeMaxValueHandler}
					/>
				</div>
				<div className={s.item}>
					min value:
					<input
						className={errorRed}
						type="number"
						value={props.min}
						onChange={onChangeMinValueHandler}
					/>
				</div>
			</div>
			<div className={s.buttonsGroup}>
				<SuperButton name={props.name} callBack={props.callBack} disabled={error || props.isSet}/>
			</div>
		</>
	)
}

