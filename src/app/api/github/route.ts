import { NextResponse } from "next/server";

import { getGithubData } from "@/lib/github/github";

export async function GET() {
  try {
    const data = await getGithubData();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to fetch GitHub data.",
      },
      {
        status: 500,
      },
    );
  }
}
