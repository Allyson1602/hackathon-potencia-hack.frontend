import { AxiosResponse } from "axios";
import ApiRestClient, { IResponse } from "../http/api-rest";

export interface ICardPaymentModel {
    cardNumber: string,
    nameCard: string,
    vality: string,
    cvv: string,
    identity: string
}

export interface ICardPaymentService {
    makeCardPayment: (card: ICardPaymentModel) => Promise<AxiosResponse<IResponse<ICardPaymentModel>>>;
}

class CardPaymentService extends ApiRestClient implements ICardPaymentService {
    makeCardPayment = (card: ICardPaymentModel): Promise<AxiosResponse<IResponse<ICardPaymentModel>>> => {
        return this.get("/card-payment");
    };
}

const cardPaymentService = new CardPaymentService();
export default cardPaymentService;