import Image from 'next/image'

async function getProjects() {
  const response = await fetch('http://localhost:3000/api/projects')
  return response.json()
}

export default async function Page() {
  const { results } = await getProjects()

  const calculatedPeriod = (start: string, end: string): number => {
    // start와 end 날짜를 Date 객체로 변환
    const startDate = new Date(start)
    const endDate = new Date(end)
    const oneDay = 60 * 60 * 24 // 초 * 분 * 시간

    // 두 날짜의 차이를 일(day) 단위로 계산하여 반환
    return Math.abs((endDate.getTime() - startDate.getTime()) / oneDay)
  }

  // 노션에서 사용하는거랑 상이하기때문에 따로 매핑
  const colorMap: { [key: string]: string } = {
    blue: '#1481ba',
    orange: '#f49e3c',
    red: '#e63946',
    green: '#48c949',
    pink: '#e574bc',
    brown: '#6b4f35',
    gray: '#b0b0b0',
    lightGray: '#d3d3d3',
    yellow: '#f1c40f',
    purple: '#9b59b6',
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
      <h2 className="text-2xl font-bold sm:text-4xl">
        총 프로젝트 :
        <span className="pl-4 text-blue-500">{results.length}</span>
      </h2>

      <div className="grid grid-cols-1 gap-8 p-12 m-4 lg:grid-cols-3 md:grid-cols-2">
        {results.map(
          (aProject: {
            properties: {
              Name: { title: { plain_text: string }[] }
              Github: { url: string }
              Description: { rich_text: { plain_text: string }[] }
              Tag: {
                multi_select: { id: string; name: string; color: string }[]
              }
              WorkPeriod: { date: { start: string; end: string } }
            }
            cover: { external: { url: string } }
            id: string | null | undefined
          }) => {
            const title = aProject.properties.Name.title[0].plain_text
            const github = aProject.properties.Github.url
            const description =
              aProject.properties.Description.rich_text[0].plain_text
            const imgSrc =
              aProject.cover.external.url ??
              'https://via.placeholder.com/370x220'
            const tags = aProject.properties.Tag.multi_select
            const start = aProject.properties.WorkPeriod.date.start
            const end = aProject.properties.WorkPeriod.date.end

            return (
              <div className="project-card" key={aProject.id}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                  {/* 이미지 영역 */}
                  <div className="relative w-full h-52">
                    <Image
                      className="object-cover w-full h-full"
                      src={imgSrc}
                      alt="cover image"
                      fill={true}
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <h3 className="mt-4 text-xl">{description}</h3>
                    <a href={github} target="_blank" rel="noopener noreferrer">
                      깃허브 바로가기
                    </a>
                    <p className="my-1">
                      작업기간 : {start} ~ {end}({calculatedPeriod(start, end)}일)
                    </p>
                    <div className="flex items-start mt-2">
                      {tags.map((aTag) => {
                        const bgColor = colorMap[aTag.color] || '#000000'; // colorMap에서 색상을 찾고, 없으면 기본값으로 검정색

                        return (
                            <h1
                                className="px-2 py-1 mr-2 rounded-md text-white font-bold"
                                style={{ backgroundColor: bgColor }}
                                key={aTag.id}
                            >
                              {aTag.name}
                            </h1>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )
          },
        )}
      </div>
    </div>
  )
}
