import React, { useState } from 'react';
import {
	ButtonContainer,
	Input,
	NumberContainer,
	ResetButton,
	StartButton,
	TimeContainer,
	TimerContainer,
} from './styles';
import type { INumberInput } from './types';
import useTimer from './useTimer';
import { format } from './utils';

const NumberInput = (props: INumberInput): JSX.Element => {
	const {
		data: [val, setVal],
		time,
	} = props;

	if (typeof time === 'number')
		return <NumberContainer>{format(time)}</NumberContainer>;

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value.replace(/[^0-9]/g, '').slice(-2);
		setVal(format(Number(value)));
	};
	return <Input onChange={handleChange} value={val} placeholder='00' />;
};

export default function SetTimer(): JSX.Element {
	const timer = useTimer();
	const { time, setTime, seconds, minutes } = timer;
	const min = useState<string>('00');
	const sec = useState<string>('00');

	const handleResetTime = () => {
		if (time) {
			setTime(null);
		} else {
			sec[1]('00');
			min[1]('00');
		}
	};

	const handleStartTime = () => {
		const timeToFinish = (Number(min[0]) * 1000 * 60) | (Number(sec[0]) * 1000);
		setTime(timeToFinish);
	};

	return (
		<TimerContainer>
			<TimeContainer>
				<NumberInput data={min} time={time && minutes} /> :{' '}
				<NumberInput data={sec} time={time && seconds} /> s
			</TimeContainer>
			<ButtonContainer>
				<StartButton onClick={handleStartTime}>Start</StartButton>
				<ResetButton onClick={handleResetTime}>Reset</ResetButton>
			</ButtonContainer>
		</TimerContainer>
	);
}
