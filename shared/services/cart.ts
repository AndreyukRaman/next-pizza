import { axiosInstance } from '@/shared/services/instance';
import { CartDTO } from '@/shared/services/dto/cart.dto';

export const fetchCart = async (): Promise<CartDTO> => {
  return (await axiosInstance.get<CartDTO>('/cart')).data;
};
