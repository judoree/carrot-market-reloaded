export function GET() {
  const basewURL = "https://github.com/login/oauth/authorize";
  const params = {
    client_id: process.env.GITHUB_CLIENT_ID!,
    scope: "read:user,user:email",
    allow_signup: "true",
  };
  const formattedPaarams = new URLSearchParams(params).toString();
  const finalUrl = `${basewURL}?${formattedPaarams}`;
  return Response.redirect(finalUrl);
}
