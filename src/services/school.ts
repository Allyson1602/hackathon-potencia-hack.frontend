import { AxiosResponse } from "axios";
import ApiRestClient, { IResponse } from "../http/api-rest";

export interface ISchoolModel {
    id: number;
    name: string;
    description: string;
    image: string;
}

export interface ISchoolService {
    listSchools: () => Promise<AxiosResponse<IResponse<ISchoolModel[]>>>;
}

class SchoolService extends ApiRestClient implements ISchoolService {
    listSchools = (): Promise<AxiosResponse<IResponse<ISchoolModel[]>>> => {
        return this.get("/schools");
    };
}

const schoolService = new SchoolService();
export default schoolService;