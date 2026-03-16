interface Env {
  SUPABASE_URL: string;
  SUPABASE_ANON_KEY: string;
}

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export const onRequestOptions = async () => new Response(null, { headers: CORS });

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  if (!env.SUPABASE_URL) {
    return Response.json([], { headers: CORS });
  }
  const res = await fetch(
    `${env.SUPABASE_URL}/rest/v1/comments?select=id,text,mbti,country,created_at&order=created_at.desc&limit=50`,
    { headers: { apikey: env.SUPABASE_ANON_KEY, Authorization: `Bearer ${env.SUPABASE_ANON_KEY}` } }
  );
  const data = await res.json();
  return Response.json(data, { headers: CORS });
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  if (!env.SUPABASE_URL) {
    return Response.json({ error: 'DB not configured' }, { status: 503, headers: CORS });
  }
  const body = await request.json() as { text: string; mbti: string };
  const text = (body.text ?? '').slice(0, 140).trim();
  if (!text) return Response.json({ error: 'empty' }, { status: 400, headers: CORS });

  // Cloudflare provides country in cf object
  const country = (request as any).cf?.country ?? 'Unknown';

  const res = await fetch(`${env.SUPABASE_URL}/rest/v1/comments`, {
    method: 'POST',
    headers: {
      apikey: env.SUPABASE_ANON_KEY,
      Authorization: `Bearer ${env.SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({ text, mbti: body.mbti, country }),
  });

  if (!res.ok) return Response.json({ error: 'db error' }, { status: 500, headers: CORS });
  return Response.json({ success: true }, { headers: CORS });
};
