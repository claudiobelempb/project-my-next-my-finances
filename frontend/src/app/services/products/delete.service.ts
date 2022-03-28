import { httpClient } from '@/http/index';
import { Product } from '@/types/product';
import { toast } from 'react-toastify';

const resourceUrl: string = '/api/products';

const useDeleteService = () => {
  const onDelete = async (id: string): Promise<void> => {
    try {
      const url: string = `${resourceUrl}/${id}`;
      await httpClient.delete<void>(url);
      toast.success('Produto excluido com sucesso!');
    } catch {
      toast.error('Erro ao excluir o produto');
    }
  };

  return {
    onDelete
  };
};

export { useDeleteService };
