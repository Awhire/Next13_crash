import  Link from "next/link"
import Repo from "@/app/components/Repo"
import RepoDirs from "@/app/components/RepoDirs"


const RepoPage = ({ params: { name } }) => {
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>
        Back To Repositories
      </Link>
      <Repo name={name} />
      <RepoDirs name={name} />
    </div>
  )
}

export default RepoPage
