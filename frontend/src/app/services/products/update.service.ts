import { httpClient } from '@/http/index';
import { Product } from '@/types/product';
import { toast } from 'react-toastify';

const resourceUrl: string = '/api/products';

const useUpdateService = () => {
  const onUpdate = async (product: Product): Promise<void> => {
    try {
      const url: string = `${resourceUrl}/${product.id}`;
      await httpClient.put<Product>(url, product);
      toast.success('Produto atualizado com sucesso!');
    } catch {
      toast.error('Erro ao atulizar o produto');
    }
  };

  return {
    onUpdate
  };
};

export { useUpdateService };
