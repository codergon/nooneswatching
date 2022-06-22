import Home from "./pages/Home";

import { Suspense } from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import Platform from "./pages/Platform";

const renderLoader = () => <p></p>;

const RootComponent = () => (
  <div className="container">
    {/* <Home /> */}
    <Platform />
  </div>
);

const App = () => {
  const queryClient = new QueryClient();
  return (
    <Suspense fallback={renderLoader()}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RootComponent />
        </QueryClientProvider>
      </Provider>
    </Suspense>
  );
};

export default App;
