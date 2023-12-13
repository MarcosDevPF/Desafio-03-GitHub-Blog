import { Route, Routes } from "react-router-dom";
import { Blog } from "./pages/Blog";
import { PostInfo } from "./pages/PostInfo";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Routers() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Blog />} />
                <Route path="/post" element={<PostInfo />} />
            </Route>
        </Routes>
    )
}