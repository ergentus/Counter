import React from 'react';
import {ButtonNamesFilterType} from "../App";

type SuperButtonPropsType = {
	callBack: (name: ButtonNamesFilterType) => void
	name: ButtonNamesFilterType
	disabled: boolean
}

const SuperButton = (props: SuperButtonPropsType) => {
	const callBackHandler = () => {
		props.callBack(props.name)
	}

	return (
		<button
			className={'buttons-group-block__item'}
			disabled={props.disabled}
			onClick={callBackHandler}>{props.name}
		</button>
	)
}
export default SuperButton;