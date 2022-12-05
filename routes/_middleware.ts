import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 311,
  site: "mysamplestore",
  domains: ["mysamplestore-deco.deno.dev"],
});