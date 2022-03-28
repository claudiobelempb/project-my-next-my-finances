import { httpClient } from '@/http/index';
import { User } from '@/types/user';
import { toast } from 'react-toastify';

const resourceUrl: string = '/api/users';

const useUpdateUserService = async (user: User): Promise<void> => {
  try {
    const url: string = `${resourceUrl}/${user.id}`;
    await httpClient.put<User>(url, user);
    toast.success('Usuário atualizado com sucesso!');
  } catch {
    toast.error('Erro ao atulizar o usuário');
  }
};

export { useUpdateUserService };
