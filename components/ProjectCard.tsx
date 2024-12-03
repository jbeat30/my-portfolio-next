import { ProjectType } from '@/types/Project'
import Image from 'next/image'
import { calculatedPeriod } from '@/utils'
import { colorMap } from '@/lib/colorMap'

export default function ProjectCard({data} : {data: ProjectType}) {
  const { properties, cover } = data
  const title = properties.Name.title[0].plain_text
  const github = properties.Github.url
  const description = properties.Description.rich_text[0].plain_text
  const imgSrc =
    cover?.external.url ?? 'https://via.placeholder.com/370x220'
  const tags = properties.Tag.multi_select
  const start = properties.WorkPeriod.date.start
  const end = properties.WorkPeriod.date.end
  
  
  return (
    <div className="project-card" key={data.id}>
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
        {/* 컨텐츠 영역 */}
        <div className="p-4 flex flex-col flex-grow">
          <h1 className="text-2xl font-bold">{title}</h1>
          <h3 className="mt-4 text-xl">{description}</h3>
          <a href={github} target="_blank" rel="noopener noreferrer">
            깃허브 바로가기
          </a>
          <p className="my-1">
            작업기간 : {start} ~ {end}({calculatedPeriod(start, end)}일)
          </p>
          {/* 태그 */}
          <div className="flex items-start mt-2">
            {tags.map((tag) => {
              const bgColor = colorMap[tag.color] || '#000000' // colorMap에서 색상을 찾고, 없으면 기본값으로 검정색

              return (
                <h1
                  className="px-2 py-1 mr-2 rounded-md text-white font-bold"
                  style={{ backgroundColor: bgColor }}
                  key={tag.id}
                >
                  {tag.name}
                </h1>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
