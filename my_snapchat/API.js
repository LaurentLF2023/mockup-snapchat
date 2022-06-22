const uriInscription = "http://snapi.epitech.eu:8000/inscription"
const uriConnection = 'http://snapi.epitech.eu:8000/connection'
const uriAll = 'http://snapi.epitech.eu:8000/all'

const registerAPI = async (setEmail, setPassword, navigation )=>{
    
  return fetch(uriInscription, {
      method: 'POST',
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify({
        email : setEmail,
        password : setPassword})
    }).then((response) => response.json())     
}

const loginAPI = async (userMail, userPassword) => {
    return fetch(uriConnection, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: userMail,
        password: userPassword
      })
    }).then((response) => response.json())
}

const receiveSnapAPI = async (token) =>{
  let a = await fetch(uriAll,{
    method: 'GET',
    headers:{'token': token},
  }).then((res) => res.json())
  // console.log("R:",a.data);
  return a.data;
}


export { receiveSnapAPI }
export { registerAPI }
export { loginAPI }