export type NewSMS = {
    name: string,
    msisdns: string,
    message_text: string,
    run_time?: string,
    sender_id?: string,
}

export type SMS = {
    name: string,
    msisdns: string,
    client_id: number,
    id: number,
    message_text: string,
    type: string,
    created_at: string,
    updated_at: string,
    run_time?: string,
    sender_id?: string,
}