import React from 'react'; 
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useCustomHook } from '../src/hooks/useCustomHook' 

// Create a QueryClient instance
const queryClient = new QueryClient();

// Define the wrapper component with correct typing
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useCustomHook', () => {
  it('should return expected data when query is successful', async () => {
    // Render the hook with the provided wrapper
    const { result } = renderHook(() => useCustomHook(), { wrapper });

    // Wait for the query to resolve and ensure the state is successful
    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    // Check the returned data
    expect(result.current.data).toEqual('Hello');
  });
});
