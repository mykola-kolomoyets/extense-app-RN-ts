import {FC} from "react";

import {ButtonMode} from "../../../utils/enums/button";

import ButtonComponent, {ButtonProps} from './button';
import IconButton, {IconButtonProps} from "./icon-button";

const PrimaryButtonComponent: FC<Omit<ButtonProps, "view">> = (props) =>
		<ButtonComponent {...props as Omit<ButtonProps, "view">} view={ButtonMode.primary} />;
	
const FlatButtonComponent: FC<Omit<ButtonProps, "view">> = (props) =>
	<ButtonComponent {...props as Omit<ButtonProps, "view">} view={ButtonMode.flat} />;
	
const IconButtonComponent = (props: IconButtonProps) => <IconButton {...props}/>;

export default {
	Primary: PrimaryButtonComponent,
	Flat: FlatButtonComponent,
	Icon: IconButtonComponent
};