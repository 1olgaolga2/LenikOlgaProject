import { APIRequestContext } from '@playwright/test';

export class ApiClient {
  private baseURL: string = 'https://www.demoblaze.com';
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async registerUser(username: string, password: string): Promise<{ Auth: boolean; message?: string }> {
   
    const response = await this.request.post(`https://api.demoblaze.com/signup`, {
    headers: {
        'Content-Type': 'application/json',
      },
    data: {
        username: username,
        password: password,
      },
    });
    
    if (!response.ok()) {
      throw new Error(`Failed to register user: ${response.status()} ${response.statusText()}`);
    }

    return await response.json();
  }
}
