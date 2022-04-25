export const format = (t: number) => {
	let n = `${t}`;
	while (n.length < 2) n = `0${n}`;
	return n;
};