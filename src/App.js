import React from "react";
import { MainFetcher } from "./components/MainFetcher";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <MainFetcher />
      </QueryClientProvider>
    </div>
  );
};

export default App;
