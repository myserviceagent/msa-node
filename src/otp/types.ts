export type NewSMSOtp = {
    msisdn: string,
    otp?: string,
    expires?: number,
    length?: number,
    alphanumeric?: boolean,
    message?: string,
    append_otp_to_message?: boolean,
    sender_id?: string,
}

export type NewVoiceOtp = {
    msisdn: string,
    otp?: string,
    expires?: number,
    length?: number,
    alphanumeric?: boolean,
    message?: string,
}

export type NewVerifyOtp = {
    msisdn: string,
    otp: string,
}

export type SMSOTP = {
    msisdn: string,
    client_id: number,
    id: number,
    message?: string,
    expires?: number,
    length?: number,
    alphanumeric?: boolean,
    append_otp_to_message?: boolean,
    type: string,
    created_at: string,
    updated_at: string,
    sender_id?: string,
}

export type VoiceOTP = {
    msisdn: string,
    client_id: number,
    id: number,
    message?: string,
    type: string,
    expires?: number,
    length?: number,
    alphanumeric?: boolean,
    append_otp_to_message?: boolean,
    created_at: string,
    updated_at: string,
}