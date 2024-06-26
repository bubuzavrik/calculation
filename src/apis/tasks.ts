import { AxiosRequestConfig } from 'axios';

import { httpApiClient } from '../configs/http-client.configs';
import { CashIn, CashOutJuridical, CashOutNatural } from '../interfacres/tasks';

export class TasksApi {
  constructor(private url: string) {}

  getCashInConfig(config?: AxiosRequestConfig) {
    return httpApiClient.get<CashIn>(`${this.url}/cash-in`, config);
  }

  getCashOutNaturalConfig(config?: AxiosRequestConfig) {
    return httpApiClient.get<CashOutNatural>(`${this.url}/cash-out-natural`, config);
  }

  getCashOutJuridicalConfig(config?: AxiosRequestConfig) {
    return httpApiClient.get<CashOutJuridical>(`${this.url}/cash-out-juridical`, config);
  }
}

export const tasksApi = new TasksApi('/tasks/api');
