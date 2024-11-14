import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { ID } from "node-appwrite";

import { createWorkspaceSchema } from "../schemas";
import { sessionMiddleware } from "@/lib/session-middleware";
import { DATABASE_ID, WORKSPACES_ID } from "@/config";

const app = new Hono()
    .post("/", zValidator("json", createWorkspaceSchema), sessionMiddleware, async (c) => {
        const databases = c.get("databases");
        const user = c.get("user");

        const { name } =  c.req.valid("json");
        
        const workspaces = await databases.createDocument(
          DATABASE_ID,
          WORKSPACES_ID,
          ID.unique(),
          {
            name,
          }
        );

        return c.json({ workspace: workspaces });
    });

export default app;