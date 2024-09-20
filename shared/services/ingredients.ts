import {axiosInstance} from "@/shared/services/instance";
import {Ingredient} from "@prisma/client"
import {ApiRoutes} from "@/shared/services/constants";

export const getAllIngredients = async (): Promise<Ingredient[]> => {
    return (await axiosInstance.get<Ingredient[]>(ApiRoutes.ALL_INGREDIENTS)).data;
}