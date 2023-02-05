import { Routes, Route } from "react-router-dom";

import { PageLayout } from "~components/PageLayout";
import { Favorites } from "~pages/Favorites";
import { Home } from "~pages/Home";
import { Pokemon } from "~pages/Pokemon";

export function Router() {
    return (
        <PageLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/pokemon/:name" element={<Pokemon />} />
            </Routes>
        </PageLayout>
    );
}
