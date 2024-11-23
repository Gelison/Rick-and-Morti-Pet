import $api from '../../http/userAPI';
import { AxiosResponse } from 'axios';
import { IUser } from '../../types/AuthResponse';

export default class UserService {
  static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.get<IUser[]>('/users');
  }
}
