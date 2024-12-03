import { ProjectType } from '@/types/Project'
import ProjectCard from '@/components/ProjectCard'

async function getProjects() {
  const response = await fetch('http://localhost:3000/api/projects')
  return response.json()
}

export default async function Page() {
  const { results } = await getProjects()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
      <h2 className="text-2xl font-bold sm:text-4xl">
        총 프로젝트 :
        <span className="pl-4 text-blue-500">{results.length}</span>
      </h2>

      <div className="grid grid-cols-1 gap-8 p-12 m-4 lg:grid-cols-3 md:grid-cols-2">
        {results.map(
          (data: ProjectType) => <ProjectCard key={data.id} data={data}/>
        )}
      </div>
    </div>
  )
}
