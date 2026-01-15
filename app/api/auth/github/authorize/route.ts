import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  // Get the GitHub OAuth client ID from environment
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;

  if (!clientId) {
    return NextResponse.json(
      { error: 'GitHub OAuth not configured' },
      { status: 500 }
    );
  }

  // Build the GitHub authorization URL
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: `${request.nextUrl.origin}/api/auth/github/callback`,
    scope: 'repo,user',
    state: searchParams.get('state') || '',
  });

  const authUrl = `https://github.com/login/oauth/authorize?${params.toString()}`;

  return NextResponse.redirect(authUrl);
}
