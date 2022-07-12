import { AxiosResponse } from 'axios';
import { http } from 'app/http';
import { Product } from '@/types/product/Product';

const useProductFindAll = async (): Promise<AxiosResponse> => {
  const response: AxiosResponse<Product> = await http({
    method: 'GET',
    url: '/api/users/',
    params: {
      page: 0,
      size: 12,
    },
  });
  console.log(response.data);
  return response;
};

export { useProductFindAll };
