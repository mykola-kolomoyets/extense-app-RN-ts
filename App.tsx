import {StatusBar} from 'expo-status-bar';
import {Fragment} from "react";
import Navigator from "./components/navigation";

export default function App() {
	return (
		<Fragment>
			<StatusBar style="auto"/>
			
			<Navigator/>
		</Fragment>
	);
}


