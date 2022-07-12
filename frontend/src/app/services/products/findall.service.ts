import { http } from '@/http/index';
import { Product } from '@/types/product/Product';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

const useFindAllService = () => {
  const findAll = async (product: Product): Promise<Product> => {
    try {
      const response: AxiosResponse<Product> = await http({
        method: 'GET',
        url: `/api/users`,
        data: product,
      });
      console.log(response.data);
      return response.data;
    } catch {
      toast.error('Erro ao cadastrar o produto');
    }
    return product;
  };

  return {
    findAll,
  };
};

export { useFindAllService };
