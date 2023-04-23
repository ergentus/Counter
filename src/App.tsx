import React, {useEffect, useState} from 'react'
import {DefaultSettings} from './components/DefaultSettings/DefaultSettings'
import Display from './components/Display/Display'
import SuperButton from './components/SuperButton/SuperButton'
import s from './App.module.css'
import {loadStateValue, saveStateValue} from './components/localStorage/localStorage'

export type ButtonNamesFilterType = 'inc' | 'reset' | 'set'

function App() {

	const [count, setCount] = useState<number>(0)
	const [minValue, setMinValue] = useState<string>('0')
	const [maxValue, setMaxValue] = useState<string>('5')
	const [btnSetting, setBtnSetting] = useState<boolean>(true)
	const [error, setError] = useState<boolean>(false)
	const CounterFc = (name: ButtonNamesFilterType) => {
		if (name === 'inc') setCount(count + 1)
		if (name === 'reset') setCount(0)
		if (name === 'set') {
			setBtnSetting(true)
			saveStateValue('minValue', minValue)
			saveStateValue('maxValue', maxValue)
		}
	}

	useEffect(() => {
		debugger
		const storedMaxValue = loadStateValue('maxValue')
		const storedMinValue = loadStateValue('minValue')
		if (storedMaxValue) {
			setMaxValue(storedMaxValue)
		}
		if (storedMinValue) {
			setMinValue(storedMinValue)
		}
	}, [])

	const minCount = +minValue
	const maxCount = +maxValue
	const settingsIsChanging = !btnSetting

	const isMax = count >= maxCount - minCount || !setBtnSetting
	const isDisable = count + minCount === minCount || !setBtnSetting

	return (
		<div className={s.main}>
			<div className={s.counter}>
				<DefaultSettings
					name={'set'}
					callBack={CounterFc}
					minValue={minCount}
					maxValue={maxCount}
					setMinValue={setMinValue}
					setMaxValue={setMaxValue}
					btnSetting={btnSetting}
					setBtnSetting={setBtnSetting}
					setError={setError}
					error={error}
					setCount={setCount}
				/>
			</div>
			<div className={s.counter}>
				<div className={s.table}>
					<Display
						count={count}
						minValue={minCount}
						maxValue={maxCount}
						btnSetting={btnSetting}
						error={error}
					/>
				</div>
				<div className={s.buttonsGroup}>
					<SuperButton name={'inc'} callBack={CounterFc} disabled={isMax || settingsIsChanging}/>
					<SuperButton name={'reset'} callBack={CounterFc} disabled={isDisable || settingsIsChanging}/>
				</div>
			</div>
		</div>
	)
}

export default App