import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route 
          path="/"
          element={<MainPage />} />
          <Route
          path="/news"
          element={<NewsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
