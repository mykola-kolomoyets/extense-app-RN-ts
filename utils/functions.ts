import {Platform} from "react-native";

import {fromMillisecondsToDaysCoef} from "./constants";

export const getSum = <T>(arr: T[], field: keyof T): number =>
	arr.reduce<number>((acc, curr) => acc + Number(curr[field]), 0);

export const getFixedNumber = (value: number): string => value.toFixed(2);

export const getDateDelta = (from: Date, to: Date): number => {
	const fromDateSeconds = new Date(from).getTime();
	const toDateSeconds = new Date(to).getTime();
	
	return Math.abs(fromDateSeconds - toDateSeconds);
};

export const getDaysFromMilliseconds = (milliseconds: number): number => milliseconds * fromMillisecondsToDaysCoef;

export const getDateString = (date: Date): string => {
	if (Platform.OS === "ios") return new Date(date).toLocaleDateString().replaceAll('.', '-');
	
	const [ mm, dd, yyyy ] = new Date(date).toLocaleDateString().split('/');
	return `${dd}-${mm}-${yyyy}`;
}
