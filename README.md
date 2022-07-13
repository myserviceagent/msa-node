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
MyServiceAgentClient.sendVoiceOTP(voicePayload).then((data) => {
    console.log(data)
})

// send an sms OTP

| Parameter Name        | Required        |
| :-------------:       | :-------------: |
| msisdn                |  Yes            |
| otp                   |  No             |
| expires               |  No             |
| length                |  No             |
| alphanumeric          |  No             |
| message               |  No             |
| append_otp_to_message |  No             | 
| sender_id             |  No             |


const payload = {msisdn: '2348000000000'}
MyServiceAgentClient.sendSMSOTP(payload).then((data) => {
    console.log(data)
})

// verify a voice or SMS OTP
const verifyPayload = {msisdn: '2348000000000', otp: '24566'}
MyServiceAgentClient.verifyOTP(verifyPayload).then((data) => {
    console.log(data)
})

```

## contributing

Bug fixes and improvements to the docs and library are always welcome. Please refer to the guide below on how you can contribute.

If you're not familiar with the GitHub pull request/contribution process, [this is a nice tutorial](https://gun.io/blog/how-to-github-fork-branch-and-pull-request/).

#### Getting Started

If you want to familiarize yourself with the project, you can start by [forking the repository](https://help.github.com/articles/fork-a-repo/) and [cloning it in your local development environment](https://help.github.com/articles/cloning-a-repository/). The project requires [Node.js](https://nodejs.org) to be installed on your machine.

After cloning the repository, install the dependencies by running the following command in the directory of your cloned repository:

```bash
npm install
```

You can run the existing tests to see if everything is okay by executing:

```bash
npm test
```
#### Contribution guidelines

 - [Code of Conduct](#coc)
 - [Question or Problem?](#question)
 - [Issues and Bugs](#issue)
 - [Feature Requests](#feature)
 - [Submission Guidelines](#submit)
 - [Coding Rules](#rules)


#### <a name="coc"></a> Code of Conduct

Help us keep `msa-node` open and inclusive. Please be kind to and considerate
of other developers, as we all have the same goal: make `msa-node` as good as
it can be.

#### <a name="question"></a> Got an API/Product Question or Problem?

If you have questions about how to use `msa-node`, please see our
[docs][docs-link], and if you don't find the answer there, please contact
[hello@myserviceagent.net](mailto:hello@myserviceagent.net) with any issues you have.

#### <a name="issue"></a> Found an Issue?

If you find a bug in the source code or a mistake in the documentation, you can
help us by submitting [an issue][issue-link].
Submitting an issue will help us track it and keep you up-to-date. You can help us out even more by submitting a Pull Request with
a fix.

**Please see the [Submission Guidelines](#submit) below.**

#### <a name="feature"></a> Want a Feature?

You can request a new feature by submitting an issue to our
[GitHub Repository][github]. If you would like to implement a new feature then
consider what kind of change it is:

* **Major Changes** that you wish to contribute to the project should be
  discussed first with `msa-node` contributors in an issue or pull request so
  that we can develop a proper solution and better coordinate our efforts,
  prevent duplication of work, and help you to craft the change so that it is
  successfully accepted into the project.
* **Small Changes** can be crafted and submitted to the
  [GitHub Repository][github] as a Pull Request.


#### <a name="submit"></a> Submission Guidelines


##### Submitting a Pull Request
Before you submit your pull request consider the following guidelines:

* Search [GitHub][github] for an open or closed Pull Request that relates to
  your submission. You don't want to duplicate effort.
* Make your changes in a new git branch:

    ```shell
    git checkout -b my-fix-branch main
    ```

* Create your patch, **including appropriate test cases**.
* Follow our [Coding Rules](#rules).
* Run the full `msa-node` test suite (that is `npm run test`), and ensure
  that all tests pass.
* Commit your changes using a descriptive commit message.

    ```shell
    git commit -a
    ```
  Note: the optional commit `-a` command line option will automatically "add"
  and "rm" edited files.


* Push your branch to GitHub:

    ```shell
    git push origin my-fix-branch
    ```

In GitHub, send a pull request to `msa-node:main`.
If we suggest changes, then:

* Make the required updates.
* Re-run the `msa-node` test suite to ensure tests are still passing.
* Commit your changes to your branch (e.g. `my-fix-branch`).
* Push the changes to your GitHub repository (this will update your Pull Request).

That's it! Thank you for your contribution!

##### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull
the changes from the main (upstream) repository.

#### <a name="rules"></a> Coding Rules

To ensure consistency throughout the source code, keep these rules in mind as
you are working:

* All features or bug fixes **must be tested** by one or more tests.
* All classes and methods **must be documented**.


[docs-link]: https://github.com/myserviceagent/msa-node
[issue-link]: https://github.com/myserviceagent/msa-node/issues/new
[github]: https://github.com/myserviceagent/msa-node
