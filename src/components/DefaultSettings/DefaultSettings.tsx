import React, {ChangeEvent} from 'react'
import SuperButton from '../SuperButton/SuperButton'
import {ButtonNamesFilterType} from '../../App'
import s from './DefaultSettings.module.css'

type DefaultSettingsPropsType = {
	name: ButtonNamesFilterType
	callBack: (name: any) => void
	minValue: number
	maxValue: number
	setMinValue: (value: string) => void
	setMaxValue: (value: string) => void
	btnSetting: boolean
	setBtnSetting: (value: boolean) => void
	error: boolean
	setError: (value: boolean) => void
	setCount: (value: number) => void
}

export const DefaultSettings = (props: DefaultSettingsPropsType) => {

	const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		+e.currentTarget.value < 0 || props.minValue >= +e.currentTarget.value || props.minValue < 0
			? props.setError(true) : props.setError(false)

		props.setMaxValue(e.currentTarget.value)
		props.setCount(0)
		props.setBtnSetting(false)
	}
	const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		+e.currentTarget.value < 0 || props.maxValue <= +e.currentTarget.value
			? props.setError(true) : props.setError(false)

		props.setMinValue(e.currentTarget.value)
		props.setCount(0)
		props.setBtnSetting(false)
	}

	const errorRed = props.error ? s.red : ''

	return (
		<>
			<div className={s.table}>
				<div className={s.item}>
					max value:
					<input
						className={errorRed}
						type="number"
						value={props.maxValue}
						onChange={onChangeMaxValueHandler}
					/>
				</div>
				<div className={s.item}>
					min value:
					<input
						className={errorRed}
						type="number"
						value={props.minValue}
						onChange={onChangeMinValueHandler}
					/>
				</div>
			</div>
			<div className={s.buttonsGroup}>
				<SuperButton name={props.name} callBack={props.callBack} disabled={props.error || props.btnSetting}/>
			</div>
		</>
	)
}

