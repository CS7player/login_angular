import { Routes } from "@angular/router";

export const layoutRoutes: Routes = [
 {
  path: "", loadComponent: () => import("./layout.component").then(m => m.LayoutComponent), children: [
   { path: "", redirectTo: "dashboard", pathMatch: "full" },
   // { path: "dashboard", loadComponent: () => import("./components/dashboard/dashboard.component").then(m => m.DashboardComponent) },
  ]
 },
]