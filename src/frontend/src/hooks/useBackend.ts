import { createActor } from "@/backend";
import type { CheckoutSession } from "@/types";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery } from "@tanstack/react-query";

// Local types until backend bindings are updated
type Order = {
  id: string;
  color: string;
  price: number;
  status: Record<string, null>;
  createdAt: bigint;
  customerEmail?: string;
  trackingNumber?: string;
  stripeSessionId?: string;
};

type BackendActor = {
  isStripeConfigured?: () => Promise<boolean>;
  getOrderById?: (
    id: string,
  ) => Promise<
    { __kind__: "None" } | { __kind__: "Some"; value: Order } | Order | null
  >;
  createCheckoutSession?: (
    color: string,
    successUrl: string,
    cancelUrl: string,
  ) => Promise<string>;
};

type CreateSessionArgs = {
  color: string;
  customerEmail: string;
  customerName: string;
};

export function useIsStripeConfigured() {
  const { actor, isFetching } = useActor(createActor);
  const backend = actor as unknown as BackendActor;
  return useQuery<boolean>({
    queryKey: ["stripe", "configured"],
    queryFn: async () => {
      if (!backend?.isStripeConfigured) return false;
      return backend.isStripeConfigured();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetOrderById(orderId: string | undefined) {
  const { actor, isFetching } = useActor(createActor);
  const backend = actor as unknown as BackendActor;
  return useQuery<Order | null>({
    queryKey: ["order", orderId],
    queryFn: async () => {
      if (!backend?.getOrderById || !orderId) return null;
      const result = await backend.getOrderById(orderId);
      if (result === null || result === undefined) return null;
      // Handle both direct Order and Option<Order> return shapes
      if (typeof result === "object" && "__kind__" in result) {
        if ((result as { __kind__: string }).__kind__ === "None") return null;
        return (result as { __kind__: string; value: Order }).value;
      }
      return result as Order;
    },
    enabled: !!actor && !isFetching && !!orderId,
  });
}

export function useCreateCheckoutSession() {
  const { actor } = useActor(createActor);
  const backend = actor as unknown as BackendActor;

  return useMutation({
    mutationFn: async ({
      color,
      customerEmail,
      customerName,
    }: CreateSessionArgs): Promise<CheckoutSession> => {
      if (!backend?.createCheckoutSession)
        throw new Error("Actor not available");
      const baseUrl = `${window.location.protocol}//${window.location.host}`;
      // The backend embeds order_id in the success URL at session-creation time
      const successUrl = `${baseUrl}/payment-success`;
      const cancelUrl = `${baseUrl}/payment-failure`;
      // Pass customerEmail and customerName via URL params so backend can embed them
      const successUrlWithMeta = `${successUrl}?customer_email=${encodeURIComponent(customerEmail)}&customer_name=${encodeURIComponent(customerName)}`;
      const result = await backend.createCheckoutSession(
        color,
        successUrlWithMeta,
        cancelUrl,
      );
      const session = JSON.parse(result) as CheckoutSession;
      if (!session?.url) throw new Error("Stripe session missing url");
      return session;
    },
  });
}
