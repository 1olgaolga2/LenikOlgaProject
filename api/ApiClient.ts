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

//   async loginUser(username: string, password: string): Promise<{ Auth: boolean; message?: string; token?: string }> {
//     const response = await this.request.post(`https://api.demoblaze.com/login`, {
//       data: {
//         username: username,
//         password: password,
//       },
//     });
//  console.log(`[API] Register response status: ${response.status()}`);
//     const json = await response.json();
//     console.log(`[API] Register response data:`, json);
//     console.log(username,password);
//     if (!response.ok()) {
//       throw new Error(`Failed to login user: ${response.status()} ${response.statusText()}`);
//     }

//     return await response.json();
//   }

//   async logout(): Promise<{ Auth: boolean }> {
//     const response = await this.request.post(`${this.baseURL}/api/auth/logout`);

//     if (!response.ok()) {
//       throw new Error(`Failed to logout: ${response.status()} ${response.statusText()}`);
//     }

//     return await response.json();
//   }
}
