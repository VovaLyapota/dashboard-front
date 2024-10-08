import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const Providers = ({ children }: { children: ReactNode }) => {
  const client = new QueryClient();

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default Providers;
