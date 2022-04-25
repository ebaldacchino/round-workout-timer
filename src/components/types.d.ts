export interface INumberInput {
	data: [string, React.Dispatch<React.SetStateAction<string>>];
    time: number | null
}

export interface ICountdownTimer {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

export interface ITimer extends ICountdownTimer {
	time: number | null;
	setTime: React.Dispatch<React.SetStateAction<number | null>>;
}
