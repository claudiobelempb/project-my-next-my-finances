import { AxiosResponse } from 'axios';
import { Product } from '@/types/product/Product';
import { http } from '@/http/index';
import { toast } from 'react-toastify';

const resourceUrl: string = '/api/products';

const useFindByIdService = () => {
  const findById = async (id: string): Promise<Product> => {
    const response: AxiosResponse<Product> = await http({
      method: 'PUT',
      url: `/api/users/${id}`,
    });
    return response.data;
  };

  return {
    findById,
  };
};

export { useFindByIdService };
