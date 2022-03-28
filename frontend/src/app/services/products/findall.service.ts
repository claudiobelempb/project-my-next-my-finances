import { httpClient } from '@/http/index';
import { Product } from '@/types/product';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

const resourceUrl: string = '/api/products';

const useFindAllService = () => {
  const findAll = async (product: Product): Promise<Product> => {
    try {
      const response: AxiosResponse<Product> = await httpClient.get<Product>(
        resourceUrl
      );
      console.log(response.data);
      return response.data;
    } catch {
      toast.error('Erro ao cadastrar o produto');
    }
    return product;
  };

  return {
    findAll
  };
};

export { useFindAllService };
