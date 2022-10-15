import { useEffect, useState } from "react";
import getUserReposInfo from "../../api/getUserRepos";

const UserDataCard = ({userData}) => {
  const [repoData, setRepoData] = useState([]);
  useEffect(()=>{
    getUserReposInfo(userData.repos_url).then(data => {
      setRepoData(data)
    })
  },[userData.repos_url])

  return (
    <div>
      {userData.name ? <p className='text-3xl'>Username: {userData.name}</p> : null}
      {userData.company ? <p>Company: {userData.company}</p> : null}
      {userData.followers ? <p>Number of Followers: {userData.followers}</p> : null}
      {repoData.length > 1 ? (
        <div className="flex flex-col justify-center items-center pt-2">
          <h2 className="font-bold underline">List of Repos: </h2>
          {
            repoData.map((repo) => {
              return(
                <a className="text-orange-800 hover:underline" href={repo.html_url}>
                  {repo.name}
                </a>
              )
            })
          }
        </div>) : null}
    </div>
  )
}

export default UserDataCard;
