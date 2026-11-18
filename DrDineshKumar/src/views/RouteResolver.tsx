import React from "react";
import { notFound } from "next/navigation";
import type { ResolvedRoute } from "./resolveRoute";
import GridPage from "./GridPage";
import DoctorProfilePage from "./DoctorProfilePage";

/** Renders the template chosen by resolveRoute(). */
export default function RouteResolver({ route }: { route: ResolvedRoute }) {
  switch (route.kind) {
    case "doctor-profile":
      return <DoctorProfilePage />;
    case "grid":
      return <GridPage page={route.page} />;
    case "not-found":
      notFound();
  }
}
