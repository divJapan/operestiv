import { getStore } from "@netlify/blobs";

export default async (req, context) => {
    try {
        const store = getStore("media_store");
        const data = await store.get("opere", { type: "json" });

        return new Response(JSON.stringify(data || []), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
};
