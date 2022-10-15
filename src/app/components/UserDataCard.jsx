import { useEffect, useState } from "react";
import getUserReposInfo from "../../api/getUserRepos";



const UserDataCard = ({userData}) => {

  const [repoData, setRepoData] = useState([]);

  useEffect(()=>{
    getUserReposInfo(userData.repos_url).then(data => {
      console.log({data})
      // setUserData(data)
      setRepoData(data)
    })
  },[userData.repos_url])


  return (
    <div>
      {userData.name ? <p>{userData.name}</p> : null}
      {userData.company ? <p>{userData.company}</p> : null}
      {userData.followers ? <p>{userData.followers}</p> : null}
      {repoData.length > 1 ? (
        <div style={{display: 'flex', flexDirection:'column'}}>
          {
            repoData.map((repo) => {
              return(
                <a href={repo.html_url}>
                  {repo.name}
                </a>
              )
            })
          }
        </div>) : null}

    </div>
  )
}

//name
//get company
//followers
//repo url


export default UserDataCard;
