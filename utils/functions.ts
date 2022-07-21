import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from "react-native";
import {ObjWithKeys} from "./types/common";

export const createStyles = (styles: ObjWithKeys<string>): ViewStyle | TextStyle | ImageStyle =>
	StyleSheet.create(styles as any);

export const getSum = <T>(arr: T[], field: keyof T): number =>
	arr.reduce<number>((acc, curr) => acc + Number(curr[field]), 0);

export const getFixedNumber = (value: number): string => value.toFixed(2);