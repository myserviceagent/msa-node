const nock = require('nock')
const MyServiceAgent = require('../../dist')

describe('Telemarketing resource', () => {
    test('createSMS returns error ', async () => {
        // Set up the mock request
        const scope = nock('https://api.myserviceagent.net')
          .post('/api/v1/telemarketing/sms')
          .reply(200, [{ title: 'Telemarketing' }])

        // Make the request use an actual valid apiKey.
        const MyServiceAgentClient = new MyServiceAgent({ apiKey: 'xxxx' })
        const payload = {name: 'Test Tele', msisdns: '2348000000000', message_text: 'Hello world!'}
        await MyServiceAgentClient.createSMS(payload)

        // Assert that the expected request was made.
        scope.done()
    })

})

