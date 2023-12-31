import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./Layouts/DefaultLayout";
import { HomePage } from "./pages/Home";
import { PostPage } from "./pages/Post";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/post" element={<PostPage />} />
      </Route>
    </Routes>
  );
}
