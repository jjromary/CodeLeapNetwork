import { Route, Routes } from "react-router-dom";
import Feed from "./pages/feed";
import Home from "./pages/home";

export function Router() {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/feed'} element={<Feed />} />
    </Routes>
  )
}