import { Telemarketing } from './telemarketing'
import { applyMixins } from './utils'
import { Base } from './base'

class MyServiceAgent extends Base {}
interface MyServiceAgent extends Telemarketing {}
applyMixins(MyServiceAgent, [Telemarketing]);

export default MyServiceAgent
