import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { getServerConfig } from "../config.server";

// Example createServerFn. Protected by requireSupabaseAuth so unauthenticated
// callers cannot invoke it via direct RPC.
export const getGreeting = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator(z.object({ name: z.string().min(1).max(100) }))
  .handler(async ({ data }) => {
    const config = getServerConfig();
    return {
      greeting: `Hello, ${data.name}!`,
      mode: config.nodeEnv ?? "unknown",
    };
  });

