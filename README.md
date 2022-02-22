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
const payload = {name: 'Test Tele', msisdns: '2348000000000', message_text: 'Hello world!'}
MyServiceAgentClient.createSMS(payload).then((data) => {
    console.log(data)
})

```

## contributing
