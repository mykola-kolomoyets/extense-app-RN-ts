export type ObjWithKeys<TValue = string> = {
	[key in string | number]: TValue;
};