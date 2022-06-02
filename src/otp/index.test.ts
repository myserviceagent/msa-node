const nock = require('nock')
const MyServiceAgent = require('../../dist')

describe('Otp resource', () => {
    test('sendSMSOTP returns success ', async () => {
        // Set up the mock request
        const scope = nock('https://api.myserviceagent.net')
          .post('/api/v1/otp/sms')
          .reply(200, [{ title: 'OTP' }])

        // Make the request use an actual valid apiKey.
        const MyServiceAgentClient = new MyServiceAgent({ apiKey: 'xxx' })
        const payload = {msisdn: '2348000000000'}
        await MyServiceAgentClient.sendSMSOTP(payload)

        // Assert that the expected request was made.
        scope.done()
    })

})

