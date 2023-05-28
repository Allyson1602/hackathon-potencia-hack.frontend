import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosResponseHeaders } from "axios";

const createAxiosResponse = <T>(retorno: T) => {
	return {
		data: retorno,
		status: 200,
		statusText: "Request Sucess",
		headers: {} as AxiosResponseHeaders,
		config: {} as AxiosRequestConfig<any>,
		request: {}
	} as AxiosResponse;
}

export const createResponseMock = <T>(data: T) : Promise<AxiosResponse<IResponse<T>>> => {
    let retorno = {
        success: true,
        mensagem: "Executado com sucesso",
        result: data
    } as IResponse<T>;
    let promise = new Promise<AxiosResponse<IResponse<T>>>((resolve, reject) => {
        let axiosResponse = createAxiosResponse(retorno);
        resolve(axiosResponse);
    });
    return promise;
}

export interface IResponse<T> {
    success: boolean;
    mensagem: string;
    result: T;
}

const initializeAxios = (config: AxiosRequestConfig): AxiosInstance => {
    const axiosInstance = axios.create(config);

    return axiosInstance;
};

const axiosRequestConfiguration: AxiosRequestConfig = {
    baseURL: 'http://localhost:5018',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
    timeout: 30000
};

const axiosInstance = initializeAxios(axiosRequestConfiguration);

export interface IApiRestClient {
    get: <T>(url: string, queryParams?: object) => Promise<AxiosResponse<T>>;

    post: <T>(url: string, body: object, queryParams?: object) => Promise<AxiosResponse<T>>;

    put: <T>(url: string, body: object, queryParams?: object) => Promise<AxiosResponse<T>>;

    patch: <T>(url: string, body: object, queryParams?: object) => Promise<AxiosResponse<T>>;

    delete: <T>(url: string, id:number) => Promise<AxiosResponse<T>>;
}

class ApiRestClient implements IApiRestClient {
    
    get = <T>(url: string, queryParams?: object): Promise<AxiosResponse<T>> => {
        return axiosInstance.get<T>(url, { params: queryParams });
    }

    post =<T>(url: string, body: object, queryParams?: object): Promise<AxiosResponse<T>> => {
        return axiosInstance.post<T>(url, body, { params: queryParams });
    }

    postFormData =<T>(url: string, body: object, queryParams?: object): Promise<AxiosResponse<T>> => {
        return axiosInstance.postForm<T>(url, body,  { params: queryParams, headers: { "Content-Type": "multipart/form-data",} });
    }

    put = <T>(url: string, body: object, queryParams?: object): Promise<AxiosResponse<T>> => {
        return axiosInstance.put<T>(url, body, { params: queryParams });
    }

    patch = <T>(url: string, body: object, queryParams?: object): Promise<AxiosResponse<T>> => {
        return axiosInstance.patch<T>(url, body, { params: queryParams });
    }

    delete = <T>(url: string, id: number): Promise<AxiosResponse<T>> => {
        return axiosInstance.delete<T>(`${url}/${id}` );
    }
}

export default ApiRestClient;