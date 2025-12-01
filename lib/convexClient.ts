import { ConvexHttpClient } from "convex/browser";

// Create a convex HTTP client for sever-side actions
const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default convex;
