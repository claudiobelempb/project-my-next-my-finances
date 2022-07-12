import { http } from '@/http/index';
import { Product } from '@/types/product/Product';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

const resourceUrl: string = '/api/products';

const useDeleteService = () => {
  const onDelete = async (id: string): Promise<void> => {
    try {
      await http({
        method: 'DELETE',
        url: `/api/users/${id}`,
      });
      toast.success('Produto excluido com sucesso!');
    } catch {
      toast.error('Erro ao excluir o produto');
    }
  };

  return {
    onDelete,
  };
};

export { useDeleteService };
