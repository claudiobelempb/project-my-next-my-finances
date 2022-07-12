import { http } from '@/http/index';
import { User } from '@/types/user/User';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

// const resourceUrl: string = '/api/users';

const useUpdateUserService = async (id: string, user: User): Promise<User | unknown> => {
  try {
    const response: AxiosResponse<User> = await http({
      method: 'PUT',
      url: `/api/users/${id}`,
      data: user,
    });

    console.log('Update: ', response.data);
    toast.success('Usuário atualizado com sucesso!');
    return response.data;
  } catch {
    toast.error('Erro ao atulizar o usuário');
  }
};

export { useUpdateUserService };
