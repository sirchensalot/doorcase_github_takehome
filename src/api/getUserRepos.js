const getUserReposInfo = async (userReposUrl) => {
  const userRepoData = await fetch(userReposUrl)
    .then(reponse => reponse.json())
  return userRepoData;
}

export default getUserReposInfo;
