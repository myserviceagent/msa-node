# msa-node 
The msa-node library allows you write Node.js code to make HTTP requests to the MyServiceAgent API. This library is open-source, so feel free to file an issue or contribute back to the project if you find a bug of a feature missing.


## features
- Tiny <1KB size, gzip
- Works in Node.js
- Typescript support

## installation

```bash
npm i msa-node
```

## usage

Import `msa-node` module in your project and initialize it with your [apiKey]. Get if from (https://myserviceagent.net). 

```js
import MyServiceAgent from 'msa-node'

const MyServiceAgentClient = new MyServiceAgent({ apiKey: '%apiKey%' })
// send an SMS
const smsPayload = {name: 'Test Tele', msisdns: '2348000000000', message_text: 'Hello world!'}
MyServiceAgentClient.createSMS(smsPayload).then((data) => {
    console.log(data)
})

// send a voice OTP
const voicePayload = {msisdn: '2348000000000', otp: '24566'}
MyServiceAgentClient.sendVoiceOTP(payload).then((data) => {
    console.log(data)
})

// send an sms OTP
const payload = {msisdn: '2348000000000'}
MyServiceAgentClient.sendSMSOTP(payload).then((data) => {
    console.log(data)
})

// verify a voice or SMS OTP
const verifyPayload = {msisdn: '2348000000000', otp: '24566'}
MyServiceAgentClient.verifyOTP(payload).then((data) => {
    console.log(data)
})

```

## contributing
