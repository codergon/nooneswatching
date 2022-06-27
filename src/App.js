import { Suspense } from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import Platform from "./pages/Platform";

const renderLoader = () => <p></p>;

const RootComponent = () => (
  <div className="container">
    <Routes>
      <Route path="/:id" element={<Platform />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  </div>
);

const App = () => {
  const queryClient = new QueryClient();
  return (
    <Suspense fallback={renderLoader()}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <RootComponent />
          </Router>
        </QueryClientProvider>
      </Provider>
    </Suspense>
  );
};

export default App;
