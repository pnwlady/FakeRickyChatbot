'use strict';

const functions = require('firebase-functions');
const request = require('request-promise');
const {dialogflow} = require('actions-on-google');

const app = dialogflow();

const Welcome_Intent = 'Default Welcome Intent';
const Fallback_Intent = 'Default Fallback Intent';
const Get_Joke_Intent = 'Tell Me A Joke Intent';
const Person_Entity = 'PersonEntity';
const Joke_Type_Entity = 'JokeTypeEntity';


app.intent(Welcome_Intent, (conv) => {
	conv.ask(`Well, hello there, let's get intimage, who am I speaking with?`);
});

app.intent(Fallback_Intent, (conv) => {
	conv.ask(`Lay off the whiskey, I can't understand you.`);
});

app.intent(Get_Joke_Intent, (conv) => {
  const joke_type = conv.parameter(Joke_Type_Entity).toLowerCase();
  if (joke_type === 'flying') {
      conv.ask(`What's the difference between a fighter pilot and God? God doesn't think He's a fighter pilot.`);
    } else if (joke_type === 'sailing') {
        conv.ask(`An ‘ol salt swaggers into a bar.
        He has a ship’s wheel stuffed into the front of his trousers.
        The bartender says, “Hey, you’ve got a ship’s wheel in your trousers!”
        The ‘ol salt says, “Aye mate and it’s driving me nuts!”
        `);
    } else if (joke_type === 'Sven and Ollie') {
        conv.ask(`Sven and Ole are up fixing the roof. Sven picks up a nail, looks at it, and throws it away. 
        He picks up the next one, looks at it, and hammers it into the roof 
        The next one, he hammers it into the roof; the next one, he throws it away. 
        Ole says, "Sven, why do you throw away half the nails?" 
        Sven says, "Ole, don't you see, they have the point on the wrong end!" 
        Ole says, “Sven, don't be such a dummy! Those are for the OTHER side of the roof!”
        `);
    } else {
      conv.ask(`Hey ${Person_Entity} the 90's called, they want their shoes back.`);
    }
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
