import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layout";

import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage/ErrorPage";
import PoliciesPage from "./PoliciesPage";
import NewPolicyPage from "./NewPolicyPage";
import PolicyPage from "./PolicyPage";
import AccountPage from "./AccountPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout.Default />}>
        <Route index element={<HomePage />} />
        <Route path="policies" element={<PoliciesPage />} />
        <Route path="new-policy" element={<NewPolicyPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="policies/:id" element={<PolicyPage />} / >
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </>
  )
);

export default router;
