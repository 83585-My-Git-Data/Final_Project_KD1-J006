import axios from 'axios'
import { config } from './config'

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
export async function register(firstName, lastName, email, password,contact,role) {
  try {
    // post body
    const body = { firstName, lastName, email, password,contact,role }
<<<<<<< HEAD
=======
=======
// export async function register(firstName, lastName, email, password,contact,role) {
//   try {
//     // post body
//     const body = { firstName, lastName, email, password,contact,role }
>>>>>>> 7d510b2f97284bef9a4323c3a67f35ec70898990
>>>>>>> main

    // send the post request
    const response = await axios.post(
      `${config.serverUrl}/admin/register`,
      body
    )

    // return the json body from response object
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }

  return null
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
export async function register2(batch, address, course, jobRole, dob, experienceLevel, gender, placementStatus, companyName){
  try{
    const body = {batch, address, course, jobRole, dob, experienceLevel, gender, placementStatus, companyName}
    const response = await axios.post(
      `${config.serverUrl}/admin/register2`,body
    )
    return response.data
<<<<<<< HEAD
=======

  }catch(ex){
    console.log(`exception:`,ex)
  }
  return null
}

export async function register3(secondaryEducationCollege, secondaryEducationPercentage,secondaryEducationPassoutYear,higherSecondaryEducationCollege, higherSecondaryEducationPercentage,
                                higherSecondaryEducationPassoutYear, graduationCourse, graduationPercentage,graduationPassoutYear,postgraduationCourse,postgraduationPercentage,postgraduationPassoutYear ){
  try{
    const body = {secondaryEducationCollege, secondaryEducationPercentage, secondaryEducationPassoutYear, higherSecondaryEducationCollege, higherSecondaryEducationPercentage,higherSecondaryEducationPassoutYear,
                  graduationCourse,graduationPercentage, graduationPassoutYear,postgraduationCourse,postgraduationPercentage,postgraduationPassoutYear}
    const response = await axios.post(
      `${config.serverUrl}/admin/register3`,body
    )
    return response.data
  }catch(ex){
    console.log(`exception:`,ex)
  }  
  return null                              
}


export async function login(email, password) {
  const body = { email, password }
  try {
    const response = await axios.post(`${config.serverUrl}/admin/login`, body)
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }
=======
// export async function register2(batch, address, course, jobRole, dob, experienceLevel, gender, placementStatus, companyName){
//   try{
//     const body = {batch, address, course, jobRole, dob, experienceLevel, gender, placementStatus, companyName}
//     const response = await axios.post(
//       `${config.serverUrl}/admin/register2`,body
//     )
//     return response.data
>>>>>>> 7d510b2f97284bef9a4323c3a67f35ec70898990
>>>>>>> main

  }catch(ex){
    console.log(`exception:`,ex)
  }
  return null
}

export async function register3(secondaryEducationCollege, secondaryEducationPercentage,secondaryEducationPassoutYear,higherSecondaryEducationCollege, higherSecondaryEducationPercentage,
                                higherSecondaryEducationPassoutYear, graduationCourse, graduationPercentage,graduationPassoutYear,postgraduationCourse,postgraduationPercentage,postgraduationPassoutYear ){
  try{
    const body = {secondaryEducationCollege, secondaryEducationPercentage, secondaryEducationPassoutYear, higherSecondaryEducationCollege, higherSecondaryEducationPercentage,higherSecondaryEducationPassoutYear,
                  graduationCourse,graduationPercentage, graduationPassoutYear,postgraduationCourse,postgraduationPercentage,postgraduationPassoutYear}
    const response = await axios.post(
      `${config.serverUrl}/admin/register3`,body
    )
    return response.data
  }catch(ex){
    console.log(`exception:`,ex)
  }  
  return null                              
}


export async function login(email, password) {
  const body = { email, password }
  try {
    const response = await axios.post(`${config.serverUrl}/admin/login`, body)
    return response.data
  } catch (ex) {
    console.log(`exception: `, ex)
  }

  return null
  //   axios
  //     .post(`${config.serverUrl}/admin/login`, body)
  //     .then((response) => {
  //       console.log(response.data)
  //       return response.data
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
}
