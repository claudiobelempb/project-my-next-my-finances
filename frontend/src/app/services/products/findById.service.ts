import { AxiosResponse } from 'axios';
import { Product } from '@/types/product';
import { httpClient } from '@/http/index';
import { toast } from 'react-toastify';

const resourceUrl: string = '/api/products';

const useFindByIdService = () => {
  const findById = async (id: string): Promise<Product> => {
    const url: string = `${resourceUrl}/${id}`;
    const response: AxiosResponse<Product> = await httpClient.get<Product>(url);
    return response.data;
  };

  return {
    findById
  };
};

export { useFindByIdService };
