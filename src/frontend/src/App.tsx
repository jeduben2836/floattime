import { Layout } from "@/components/Layout";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("@/pages/Home"));
const ContactPage = lazy(() => import("@/pages/Contact"));
const OrderTrackingPage = lazy(() => import("@/pages/OrderTracking"));
const PaymentSuccessPage = lazy(() => import("@/pages/PaymentSuccess"));
const PaymentFailurePage = lazy(() => import("@/pages/PaymentFailure"));

const PageFallback = () => (
  <div className="flex flex-col gap-4 p-8 max-w-2xl mx-auto">
    <Skeleton className="h-12 w-48" />
    <Skeleton className="h-64 w-full" />
    <Skeleton className="h-8 w-32" />
  </div>
);

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense fallback={<PageFallback />}>
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const orderTrackingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/order-tracking/$orderId",
  component: OrderTrackingPage,
});

const paymentSuccessRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/payment-success",
  component: PaymentSuccessPage,
});

const paymentFailureRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/payment-failure",
  component: PaymentFailurePage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  contactRoute,
  orderTrackingRoute,
  paymentSuccessRoute,
  paymentFailureRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
