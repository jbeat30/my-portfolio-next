import { NextResponse } from 'next/server'

export async function GET() {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      page_size: 100,
      sorts: [
        {
          property: 'Name',
          direction: 'descending',
        },
      ]
    }),
  }

  try {
    const response: Response = await fetch(
      `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
      options,
    )

    if (!response.ok) {
      // API 응답 상태 확인 및 에러 처리
      const error = await response.json()
      return NextResponse.json({ error }, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json(data) // API 응답 반환
  } catch (error) {
    console.error('Notion API 가져올때 에러 발생:', error)
    return NextResponse.json(
      { error: '서버 에러' },
      { status: 500 },
    )
  }
}
