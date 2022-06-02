import { Telemarketing } from './telemarketing'
import { OTP } from './otp'
import { applyMixins } from './utils'
import { Base } from './base'

class MyServiceAgent extends Base {}
interface MyServiceAgent extends Telemarketing {}
interface MyServiceAgent extends OTP {}
applyMixins(MyServiceAgent, [Telemarketing, OTP]);

export default MyServiceAgent
