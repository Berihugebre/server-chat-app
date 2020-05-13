# server-chat-app

This realtime chat app is created based on this [Video](https://youtu.be/ZwFA3YMfkoc) and customized to add to the personal [portfolio](https://berihu.netlify.app/#contact)
Check the [Demo](https://be-chat.netlify.app/).

The [Fronend or client-chat-app](https://github.com/Berihugebre/Client-chat-app) of this server-chat-app is [here](https://github.com/Berihugebre/Client-chat-app)

## Installation

```bash
https://github.com/Berihugebre/server-chat-app.git
cd server-chat-app
npm install
npm start
```
## usage

This could ``not`` be used on production but, how it notifies when a user joins to chat is send information to ```RECIVER_EMAIL ``` from ```SENDER_EMAIL```.So create a new file ```.env``` and configure as follow:

```js
SENDER_EMAIL =<sender email>
MY_PASS =<sender email password>
RECIVER_EMAIL = <receiver email>
