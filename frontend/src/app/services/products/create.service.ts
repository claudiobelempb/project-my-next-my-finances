import { http } from '@/http/index';
import { Product } from '@/types/product/Product';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

const resourceUrl: string = '/api/products';

const useCreateService = () => {
  const create = async (product: Product): Promise<Product> => {
    try {
      const response: AxiosResponse<Product> = await http({
        method: 'POST',
        url: `/api/users`,
        data: product,
      });
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
