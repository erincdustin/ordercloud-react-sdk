import React from 'react'
import { renderHook } from '@testing-library/react';
import useOrderCloudContext from '../src/hooks/useOrderCloudContext'; 
import { ReactNode } from 'react';
import { OrderCloudContext } from '../src/context';

const wrapper = ({ children }: { children: ReactNode }) => {
  const mockContextValue = {
    isAuthenticated: false,
    isLoggedIn: false,
    logout: () => {},
    login: async (username: string, password: string, rememberMe?: boolean) => {
      return Promise.reject({username, password, rememberMe})
    },
    setToken: async (accessToken: string ) => {
      return Promise.reject({accessToken})
    },
    newAnonSession: async () => {
      return Promise.reject();
    },
    baseApiUrl: "https://mock-api-url.com",
    clientId: "123",
    allowAnonymous: false,
    token: 'mock-token',
    authLoading: true,
    currencyDefaults: {} as { currencyCode: string, language: string }
  };

  return (
    <OrderCloudContext.Provider value={mockContextValue}>
      {children}
    </OrderCloudContext.Provider>
  );
};

describe('useOrderCloudContext', () => {
  it('should return the correct context values', () => {
    const { result } = renderHook(() => useOrderCloudContext(), {
      wrapper,
    });

    expect(result.current).toEqual({
      baseApiUrl: 'https://mock-api-url.com',
      token: 'mock-token',
      isAuthenticated: false,
      clientId: '123',
      currencyDefaults: {},
      isLoggedIn: false,
      login: expect.any(Function),
      logout: expect.any(Function),
      newAnonSession: expect.any(Function),
      setToken: expect.any(Function),
      allowAnonymous: false,
      authLoading: true
    });
  });
});
