import { httpClient } from '@/http/index';
import { toast } from 'react-toastify';

const resourceUrl: string = '/api/users';

const useDeleteUserService = async (id: string): Promise<void> => {
  try {
    const url: string = `${resourceUrl}/${id}`;
    await httpClient.delete<void>(url);
    toast.success('Usuário excluido com sucesso!');
  } catch {
    toast.error('Erro ao excluir o usuário');
  }
};

export { useDeleteUserService };
