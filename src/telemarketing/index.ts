import { Base } from '../base'
import { NewSMS, SMS } from './types'

const resourceName = 'telemarketing/sms'

export class Telemarketing extends Base {

    createSMS (param: NewSMS) {
        return this.request<SMS>(resourceName, {
            method: 'POST',
            body: JSON.stringify(param)
        })
    }
}

