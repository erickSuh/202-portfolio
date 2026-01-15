import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const username =
      request.nextUrl.searchParams.get('username') || 'your-github-username';

    // GitHub API endpoint to get all repositories for a user
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated&direction=desc`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          // Optional: Add GitHub token for higher rate limits
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          }),
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(
        `GitHub API error: ${response.status} ${response.statusText}`
      );
    }

    const repos = await response.json();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formattedRepos = repos.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      updated_at: repo.updated_at,
    }));

    return NextResponse.json({
      success: true,
      count: formattedRepos.length,
      repositories: formattedRepos,
    });
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : 'Failed to fetch repositories',
      },
      { status: 500 }
    );
  }
}
