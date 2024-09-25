import {axiosInstance} from "@/shared/services/instance";
import {CartDTO} from "@/shared/services/dto/cart.dto";

export const fetchCart = async (): Promise<CartDTO> => {
    const {data} = await axiosInstance.get<CartDTO>('/cart');
    return data;
}