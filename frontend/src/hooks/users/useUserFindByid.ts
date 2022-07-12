import { AxiosResponse } from 'axios';
import { http } from 'app/http';
import { User } from '@/types/user/User';

const useUserFindById = async (id: string): Promise<User> => {
  const response: AxiosResponse<User> = await http({
    method: 'GET',
    url: `/api/users/${id}`,
  });
  return response.data;
};

export { useUserFindById };
