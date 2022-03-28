import { httpClient } from '@/http/index';
import { Product } from '@/types/product';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

const resourceUrl: string = '/api/products';

const useCreateService = () => {
  const create = async (product: Product): Promise<Product> => {
    try {
      const response: AxiosResponse<Product> = await httpClient.post<Product>(resourceUrl, product);
      toast.success('Produto cadastrado com sucesso!');
      return response.data;
    } catch {
      toast.error('Erro ao cadastrar o produto');
    }
    return product;
  };

  return {
    create,
  };
};

export { useCreateService };
