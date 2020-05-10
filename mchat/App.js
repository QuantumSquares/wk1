import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';



import { dialogflowConfig } from './env';

const BOT_USER = {
	_id: 2,
	name: 'Kovi19Helpline Bot',
	avatar: '/favicon-16x16.png'
};

class App extends Component {
	state = {
		messages: [
			{
				_id: 1,
				text: `Hi. This is the COVID-19 Virtual Agent. You can ask me questions related to COVID-19. How can I help? I will try to provide some answers based on publicly available information. I'm not responsible for providing professional medical advice, diagnosis or treatment. If you are experiencing a life threatening emergency, please call Local helpline 104. Central helpline +91-11-23978046. For medical advice, please contact your nearest healthcare provider.`,
				createdAt: new Date(),
				user: BOT_USER
			}
		]
	};

	componentDidMount() {
		Dialogflow_V2.setConfiguration(
			dialogflowConfig.client_email,
			dialogflowConfig.private_key,
			Dialogflow_V2.LANG_ENGLISH_US,
			dialogflowConfig.project_id
		);
	}

	handleGoogleResponse(result) {
		let text = result.queryResult.fulfillmentMessages[0].text.text[0];
		this.sendBotResponse(text);
	}

	onSend(messages = []) {
		this.setState(previousState => ({
			messages: GiftedChat.append(previousState.messages, messages)
		}));

		let message = messages[0].text;
		Dialogflow_V2.requestQuery(
			message,
			result => this.handleGoogleResponse(result),
			error => console.log(error)
		);
	}

	sendBotResponse(text) {
		let msg = {
			_id: this.state.messages.length + 1,
			text,
			createdAt: new Date(),
			user: BOT_USER
		};

		this.setState(previousState => ({
			messages: GiftedChat.append(previousState.messages, [msg])
		}));
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#fff' }}>
				<GiftedChat
					messages={this.state.messages}
					onSend={messages => this.onSend(messages)}
					user={{
						_id: 1
					}}
				/>
			</View>
		);
	}
}

export default App;