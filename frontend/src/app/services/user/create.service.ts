import { http } from '@/http/index';
import { User } from '@/types/user/User';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

const resourceUrl: string = '/api/users';

const useCreateUserService = async (user: User): Promise<User> => {
  try {
    const response: AxiosResponse<User> = await http({
      method: 'POST',
      url: '/api/users',
      data: user,
    });
    toast.success('Usuário cadastrado com sucesso!');
    return response.data;
  } catch {
    toast.error('Erro ao cadastrar  usuário');
  }
  return user;
};

export { useCreateUserService };
