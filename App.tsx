import {Fragment} from "react";
import {StatusBar} from 'expo-status-bar';
import {Provider} from "react-redux";

import Navigator from "./components/navigation";

import store from './store';

export default function App() {
	return (
		<Fragment>
			<StatusBar style="inverted"/>
			<Provider store={store}>
				<Navigator/>
			</Provider>
		</Fragment>
	);
}


