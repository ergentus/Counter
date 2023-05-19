import React, {memo} from 'react'
import {ButtonNamesFilterType} from "../../App";
import s from './SuperButton.module.css'

type SuperButtonPropsType = {
	callBack: (name: any) => void
	name: ButtonNamesFilterType
	disabled?: boolean
}

const SuperButton = memo((props: SuperButtonPropsType) => {
	const callBackHandler = () => {
		props.callBack(props.name)
	}

	return (
		<button
			className={s.item}
			disabled={props.disabled}
			onClick={callBackHandler}>{props.name}
		</button>
	)
})
export default SuperButton