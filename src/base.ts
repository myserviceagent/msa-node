import fetch from 'isomorphic-unfetch'

type Config = {
    apiKey: string,
    basePath?: string,
}

export type Pagination = {
    page?: number,
}

export abstract class Base {
    private apiKey: string
    private basePath: string

    constructor(config: Config) {
        this.apiKey = config.apiKey
        this.basePath = config.basePath || 'https://api.myserviceagent.net/api/v1/'
    }
    
    protected request<T> (endpoint: string, options?: RequestInit): Promise<T> {
        const url = this.basePath + endpoint
        const headers = {
            'authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json'
        }

        const config = {
            ...options,
            headers,
        }
        console.log(config)

        return fetch(url, config).then(r => {
            if (r.ok) {
                return r.json()
            }
            throw new Error(r.statusText)
        })
    }
}