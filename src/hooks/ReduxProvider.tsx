"use client"; // Mark as a Client Component

import { Provider } from "react-redux";
import store from "../store"; // Adjust the path if needed
import type { ReactNode } from "react";

export default function ReduxProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
