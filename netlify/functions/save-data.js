import { getStore } from "@netlify/blobs";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "steven2025"; // Fallback se non impostata nel pannello Netlify

export default async (req, context) => {
    if (req.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
    }

    try {
        const body = await req.json();
        const { password, data } = body;

        if (password !== ADMIN_PASSWORD) {
            return new Response(JSON.stringify({ error: "Password non valida" }), {
                status: 401,
                headers: { "Content-Type": "application/json" }
            });
        }

        const store = getStore("media_store");
        await store.setJSON("opere", data);

        return new Response(JSON.stringify({ success: true }), {
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
