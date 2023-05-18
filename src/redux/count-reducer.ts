type setPlusIncrementACType = { type: 'SET_PLUS_INCREMENT' }
type setResetACType = { type: 'SET_RESET' }
type setSettingsACType = { type: 'SET_SETTINGS', isSet: boolean }
type setErrorACType = { type: 'SET_ERROR', isError: boolean }
type setMinACType = { type: 'SET_MIN', min: number }
type setMaxACType = { type: 'SET_MAX', max: number }

type AllActionType = setPlusIncrementACType
	| setResetACType
	| setSettingsACType
	| setErrorACType
	| setMinACType
	| setMaxACType

export type CounterType = {
	value: number
	min: number
	max: number
	isSet: boolean
	isError: boolean
}

const initialState: CounterType = {
	value: 0,
	min: 0,
	max: 5,
	isSet: true,
	isError: false,
}

export const counterReducer = (state = initialState, action: AllActionType) => {

	switch (action.type) {
		case 'SET_PLUS_INCREMENT':
			return {...state, value: state.value + 1}
		case 'SET_RESET': {
			return {...state, value: 0}
		}
		case 'SET_SETTINGS': {
			return {...state, isSet: action.isSet}
		}
		case 'SET_ERROR': {
			return {...state, isError: action.isError}
		}
		case 'SET_MIN': {
			return {...state, min: action.min}
		}
		case 'SET_MAX': {
			return {...state, max: action.max}
		}


		default:
			return state
	}
}


export const setPlusIncrementAC = (): setPlusIncrementACType => ({type: 'SET_PLUS_INCREMENT'} as const)
export const setResetAC = (): setResetACType => ({type: 'SET_RESET'} as const)
export const setSettingsAC = (isSet: boolean): setSettingsACType => ({type: 'SET_SETTINGS', isSet} as const)
export const setErrorAC = (isError: boolean) => ({type: 'SET_ERROR', isError} as const)
export const setMinAC = (min: number) => ({type: 'SET_MIN', min} as const)
export const setMaxAC = (max: number) => ({type: 'SET_MAX', max} as const)