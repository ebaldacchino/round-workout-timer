import tw, { styled } from 'twin.macro';

export const TimerContainer = tw.div`flex flex-col items-center gap-4 text-center font-semibold h-full w-full`;

const numberContainerSize = () => tw`h-12 w-[3.3125rem] text-5xl`;

export const Input = styled.input([
	tw`rounded-lg bg-transparent top-0 select-none font-semibold outline-none`,
	numberContainerSize,
]);

export const NumberContainer = styled.span([numberContainerSize]);

export const ButtonContainer = tw.div`flex justify-center gap-8 w-full flex-wrap`;

const Button = tw.button`outline-none hocus:scale-105 duration-200 ease-in-out text-4xl w-48 py-6 text-shadow[0.125rem 0.125rem 0.5rem rgba(0,0,0,0.7)] uppercase rounded-lg font-semibold shadow-xl`;

export const StartButton = tw(Button)` bg-lime-500 hocus:bg-lime-600`;
export const ResetButton = tw(Button)` bg-red-500 hocus:bg-red-600`;

export const TimeContainer = tw.div`text-5xl`;
