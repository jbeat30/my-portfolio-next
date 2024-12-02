
async function getProjects() {
  const response = await fetch('http://localhost:3000/api/projects')
  return response.json()
}

export default async function Page() {
  const projects = await getProjects()
  return <div>projects</div>
}
