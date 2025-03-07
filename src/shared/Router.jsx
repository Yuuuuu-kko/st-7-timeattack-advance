import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const qurryClient = new QueryClient();

export default function Router() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={QueryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
