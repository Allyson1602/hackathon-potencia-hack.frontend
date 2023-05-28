import { AxiosResponse } from "axios";
import ApiRestClient, { IResponse } from "../http/api-rest";

export interface IDonorModel {
    id: number;
    name: string;
    uf: string;
    description: string;
}

export interface IDonorService {
    listDonors: () => Promise<AxiosResponse<IResponse<IDonorModel[]>>>;
}

class DonorService extends ApiRestClient implements IDonorService {
    listDonors = (): Promise<AxiosResponse<IResponse<IDonorModel[]>>> => {
        return this.get("/Donors");
    };
}

const donorService = new DonorService();
export default donorService;