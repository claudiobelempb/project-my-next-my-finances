import { AxiosResponse } from 'axios';
import { http } from 'app/http';
import { User } from '@/types/user/User';

const useUserFindAll = async (): Promise<AxiosResponse> => {
  const response: AxiosResponse<User> = await http({
    method: 'GET',
    url: '/api/users/',
    params: {
      page: 0,
      size: 12,
    },
  });
  // console.log(response.data);
  return response;
};

export { useUserFindAll };
