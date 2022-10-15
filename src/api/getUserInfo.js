const getUserInfo = async (userName) => {
  const userDataPromise = await fetch(`https://api.github.com/users/${userName}`)
    .then(reponse => reponse.json())


  return userDataPromise;
}

export default getUserInfo;
