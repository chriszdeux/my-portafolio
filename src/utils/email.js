const axios = require('axios');
export const sendMail = async (fields) => {
  
  // debugger
  try {
    await axios.post('https://murmuring-ravine-80210.herokuapp.com/mail', fields)
  } catch (error) {
    console.log(error)
  }
}