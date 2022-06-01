import React from "react";
import { ArticleFetcher } from "./components/mainArticleFetcher";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ArticleFetcher />
      </QueryClientProvider>
    </div>
  );
};

export default App;
