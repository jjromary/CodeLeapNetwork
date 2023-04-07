import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Feed } from "./pages/feed";

export function Router() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/feed'} element={<Feed />} />
    </Routes>
  )
}