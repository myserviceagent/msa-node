import { Base } from '../base'
import { NewVoiceOtp, NewSMSOtp, SMSOTP, VoiceOTP, NewVerifyOtp } from './types'

const voiceOtpResourceName = 'otp/voice'
const smsOtpResourceName = 'otp/sms'
const verifyOtpResourceName = 'otp/verify'

export class OTP extends Base {

    sendSMSOTP (param: NewSMSOtp) {
        return this.request<SMSOTP>(smsOtpResourceName, {
            method: 'POST',
            body: JSON.stringify(param)
        })
    }
    sendVoiceOTP (param: NewVoiceOtp) {
        return this.request<VoiceOTP>(voiceOtpResourceName, {
            method: 'POST',
            body: JSON.stringify(param)
        })
    }

    verifyOTP (param: NewVerifyOtp) {
        return this.request(verifyOtpResourceName, {
            method: 'POST',
            body: JSON.stringify(param)
        })
    }
}
