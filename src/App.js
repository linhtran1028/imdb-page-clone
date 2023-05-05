import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import MovieCatalogPage from "./pages/MovieCatalogPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import { CatalogPageProvider } from "./CatalogPageContext";

function App() {
  return (
    <CatalogPageProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MovieCatalogPage />} />
          <Route path=":id" element={<MovieDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </CatalogPageProvider>
  );
}

export default App;
