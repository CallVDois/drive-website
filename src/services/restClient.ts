import axios, { isAxiosError } from 'axios'
import qs from 'qs'

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export interface Request<T = any> {
    params?: Record<string, any>
    headers?: Record<string, string>
    body?: T
    timeout?: number
    responseType?: 'json' | 'blob' | 'arraybuffer' | 'document' | 'text' | 'stream'
}

export interface Response<T> {
    status: number
    headers: Record<string, string>
    data?: T
}

function toAxiosConfig<T>(request?: Request<T>): AxiosRequestConfig {
    return {
        params: request?.params,
        headers: request?.headers,
        data: request?.body,
        timeout: request?.timeout,
        responseType: request?.responseType,
        paramsSerializer: {
            serialize: (params) => qs.stringify(params, {
                arrayFormat: 'repeat',
                encodeValuesOnly: true
            })
        }
    }
}

function toResponse<T>(res: AxiosResponse<T>): Response<T> {
    return {
        status: res.status,
        headers: normalizeHeaders(res.headers),
        data: res.data,
    }
}

function normalizeHeaders(headers: any): Record<string, string> {
    const result: Record<string, string> = {}
    for (const key in headers) {
        const value = headers[key]
        if (typeof value === 'string') {
            result[key] = value
        } else if (Array.isArray(value)) {
            result[key] = value.join(', ')
        } else if (value != null) {
            result[key] = String(value)
        }
    }
    return result
}

export function handleError<T>(error: any): Response<T> {
    if (isAxiosError(error)) {
        return {
            status: error.response?.status || 500,
            headers: normalizeHeaders(error.response?.headers || {}),
            data: error.response?.data as T || {} as T
        }
    } else {
        throw new Error('An unexpected error occurred: ' + (error.message || 'Unknown error'))
    }
}

export default class RestClient {

    private instance: AxiosInstance

    constructor(baseURL: string, config?: AxiosRequestConfig) {
        this.instance = axios.create({
            baseURL,
            ...config,
        })

        this.setupInterceptors()
    }

    private setupInterceptors() {
        this.instance.interceptors.request.use(
            (config) => {
                const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`
                }
                return config
            },
            (error) => Promise.reject(error)
        )

        this.instance.interceptors.response.use(
            (response) => response,
            (error) => Promise.reject(error),
        )
    }


    public async get<T = any>(url: string, config?: Request): Promise<Response<T>> {
        return toResponse<T>(await this.instance.get<T>(url, toAxiosConfig(config)))
    }

    public async post<T = any>(url: string, data?: any, config?: Request): Promise<Response<T>> {
        return toResponse<T>(await this.instance.post<T>(url, data, toAxiosConfig(config)))
    }

    public async put<T = any>(url: string, data?: any, config?: Request): Promise<Response<T>> {
        return toResponse<T>(await this.instance.put<T>(url, data, toAxiosConfig(config)))
    }

    public async delete<T = any>(url: string, config?: Request): Promise<Response<T>> {
        return toResponse<T>(await this.instance.delete<T>(url, toAxiosConfig(config)))
    }

    public async patch<T = any>(url: string, data?: any, config?: Request): Promise<Response<T>> {
        return toResponse<T>(await this.instance.patch<T>(url, data, toAxiosConfig(config)))
    }

}