import React, {useCallback} from 'react'
import {DefaultSettings} from './components/DefaultSettings/DefaultSettings'
import Display from './components/Display/Display'
import SuperButton from './components/SuperButton/SuperButton'
import s from './App.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from './redux/redux-store'
import {setPlusIncrementAC, setResetAC, setSettingsAC} from './redux/count-reducer'


export type ButtonNamesFilterType = 'inc' | 'reset' | 'set'

function App() {

	const value = useSelector<AppStateType, number>(state => state.counter.value)
	const isSet = useSelector<AppStateType, boolean>(state => state.counter.isSet)
	const min = useSelector<AppStateType, number>(state => state.counter.min)
	const max = useSelector<AppStateType, number>(state => state.counter.max)

	const dispatch = useDispatch()

	const CounterFc = useCallback((name: ButtonNamesFilterType) => {
		switch (name) {
			case 'inc':
				dispatch(setPlusIncrementAC())
				break
			case 'reset':
				dispatch(setResetAC())
				break
			case 'set':
				dispatch(setSettingsAC(true))
				break
			default:
				break
		}
	},[])

	const isMax = value >= max - min || !isSet
	const isDisabled = value + min === min || !isSet

	return (
		<div className={s.main}>
			<div className={s.counter}>
				<DefaultSettings
					name={'set'}
					callBack={CounterFc}
					isSet={isSet}
					min={min}
					max={max}
				/>
			</div>
			<div className={s.counter}>
				<div className={s.table}>
					<Display
						value={value}
						isSet={isSet}
						min={min}
						max={max}
					/>
				</div>
				<div className={s.buttonsGroup}>
					<SuperButton name={'inc'} callBack={CounterFc} disabled={isMax}/>
					<SuperButton name={'reset'} callBack={CounterFc} disabled={isDisabled}/>
				</div>
			</div>
		</div>
	)
}

export default App

// saveStateValue('minValue', minValue)
// saveStateValue('maxValue', maxValue)
// useEffect(() => {
// 	const storedMaxValue = loadStateValue('maxValue')
// 	const storedMinValue = loadStateValue('minValue')
// 	if (storedMaxValue) {
// 		setMaxValue(storedMaxValue)
// 	}
// 	if (storedMinValue) {
// 		setMinValue(storedMinValue)
// 	}
// }, [])