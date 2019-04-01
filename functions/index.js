'use strict';

const functions = require('firebase-functions');
const {dialogflow} = require('actions-on-google');

const app = dialogflow();

const Welcome_Intent = 'Default Welcome Intent';
const Fallback_Intent = 'Default Fallback Intent';
const Get_Joke_Intent = 'Tell Me A Joke Intent';

app.intent(Welcome_Intent, (conv) => {
	conv.ask("Well, hello there, would you like to hear a joke?");
});

app.intent(Fallback_Intent, (conv) => {
	conv.ask("Lay off the whiskey, I cant understand you.");
});

app.intent(Get_Joke_Intent, (conv, {JokeTypeEntity}) => {
  if (JokeTypeEntity == "flying") {
      conv.ask("flying");
    } else if (JokeTypeEntity == "sailing") {
        conv.ask("sailing");
    } else if (JokeTypeEntity == "Sven and Ollie") {
        conv.ask("sven and ollie");
    } else {
      conv.ask("fail");
    }
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);