import React from 'react';
import type { ITimer } from './types';
const alarm = require('./../media/alarm.mp3');

const oneMin = 1000 * 60;
const oneHour = oneMin * 60;
const oneDay = oneHour * 24;

export default function useTimer(): ITimer {
	const [time, setTime] = React.useState<number | null>(null);
	const [timerInterval, setTimerInterval] = React.useState<
		NodeJS.Timeout | undefined
	>(undefined);
	const [distance, setDistance] = React.useState(0);

	const days = Math.floor(distance / oneDay);
	const hours = Math.floor((distance % oneDay) / oneHour);
	const minutes = Math.floor((distance % oneHour) / oneMin);
	const seconds = Math.floor((distance % oneMin) / 1000);

	React.useLayoutEffect(() => {
		let interval: NodeJS.Timer;

		if (!time) {
			setDistance(0);
			if (timerInterval) {
				clearInterval(timerInterval);
				setTimerInterval(undefined);
			}
		} else {
			setDistance(time);
			interval = setInterval(() => {
				setDistance((prev) => {
					if (prev) {
						return prev - 1000;
					}
					var audio = new Audio(alarm);
					audio.play();
					return time;
				});
			}, 1000);

			setTimerInterval(interval);
		}

		return () => {
			if (interval) clearInterval(interval);
		};
	}, [time]);

	return {
		days,
		hours,
		minutes,
		seconds,
		time,
		setTime,
	};
}
