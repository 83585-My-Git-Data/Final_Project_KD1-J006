import axios from 'axios';
import { config } from './config';

export async function register(firstName, lastName, email, password, contact, role) {
  try {
    const body = { firstName, lastName, email, password, contact, role: role.toUpperCase() }; // Ensure role is uppercase

    const response = await axios.post(
      `${config.serverUrl}/admin/register`,
      body,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        // withCredentials: true  // Include this if your backend expects credentials
      }
    );

    return response.data;
  } catch (ex) {
    console.error('exception: ', ex);
    return null;
  }
}


export async function register2(userId, batch, address, course, jobRole, dob, experienceLevel, gender, placementStatus, companyName) {
  try {
    const body = { batch, address, course, jobRole, dob, experienceLevel, gender, placementStatus, companyName };
    const response = await axios.post(
      `${config.serverUrl}/admin/register2/${userId}`, // Use userId in URL
      body,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (ex) {
    console.log('Exception:', ex);
    return null;
  }
}


export async function register3(secondaryEducationCollege, secondaryEducationPercentage, secondaryEducationPassoutYear, higherSecondaryEducationCollege, higherSecondaryEducationPercentage,
  higherSecondaryEducationPassoutYear, graduationCourse, graduationPercentage, graduationPassoutYear, postgraduationCourse, postgraduationPercentage, postgraduationPassoutYear) {
  try {
    const body = { secondaryEducationCollege, secondaryEducationPercentage, secondaryEducationPassoutYear, higherSecondaryEducationCollege, higherSecondaryEducationPercentage, higherSecondaryEducationPassoutYear,
      graduationCourse, graduationPercentage, graduationPassoutYear, postgraduationCourse, postgraduationPercentage, postgraduationPassoutYear };
    const response = await axios.post(
      `${config.serverUrl}/admin/register3`,
      body
    );
    return response.data;
  } catch (ex) {
    console.log(`exception:`, ex);
    return null;
  }
}

export async function login(email, password) {
  const body = { email, password };
  try {
    const response = await axios.post(`${config.serverUrl}/admin/login`, body);
    return response.data;
  } catch (ex) {
    console.log(`exception: `, ex);
    return null;
  }
}
