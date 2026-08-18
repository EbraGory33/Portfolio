import { NextResponse } from "next/server";

import { getGithubData } from "@/lib/data";

export async function GET() {
  try {
    const data = await getGithubData();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: `${error}`,
        // error,
      },
      {
        status: 500,
      },
    );
  }
}
