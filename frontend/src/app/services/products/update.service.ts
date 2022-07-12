import { http } from '@/http/index';
import { Product } from '@/types/product/Product';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

const resourceUrl: string = '/api/products';

const useUpdateService = () => {
  const onUpdate = async (id: string, product: Product): Promise<void> => {
    try {
      const response: AxiosResponse<Product> = await http({
        method: 'PUT',
        url: `/api/users/${id}`,
        data: product,
      });
      toast.success('Produto atualizado com sucesso!');
    } catch {
      toast.error('Erro ao atulizar o produto');
    }
  };

  return {
    onUpdate,
  };
};

export { useUpdateService };
