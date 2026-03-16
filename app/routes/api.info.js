// app/routes/api.info.js

export async function loader() {
  return new Response(
    JSON.stringify({ name: "File Based React Router" }), 
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

// Note: We do NOT export a default component here.
// This tells React Router this is a "Resource Route" (an API endpoint).