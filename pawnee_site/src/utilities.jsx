import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const signUp = async (firstName, lastName, email, password, department) => {
  try {
    const response = await axios.post(`${API}/signup`, {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      department: department,
    });
    return response.data.success;
  } catch (error) {
    console.error("Sign-up failed:", error.response.data || error.message);
    return false;
  }
}

export const logIn = async (email, password) => {
  try {
    const response = await axios.post(`${API}signin`, {
      email: email,
      password: password,
    });
    if (response.data.signin) {
      console.log("Login successful");
      return true;
    } else {
      console.log("Login failed");
      return false;
    }
  } catch (error) {
    console.error("Login error:", error);
    return false;
  }
};

export const currUser = async () => {
  let response = await axios.get(`${API}/curr_user`,);
  console.log(response.data);
  return response.data;
};

export const logOut = async (setNewUser) => {
  let response = await axios.post(`${API}/signout`);
  if (response.data.signout) {
    setNewUser(null);
  }
  return response.data.signout;
};

export const getQuote = async () => {
  let response = await axios.get(
    "http://ron-swanson-quotes.herokuapp.com/v2/quotes",
    { headers: null }
  );
  console.log(response);
  return response;
};

export const getTasks = async () => {
  let response = await axios.get(`${API}/workorders/`);
  return response.data.work_orders;
};

export const createWorkOrder = async (title) => {
  let response = await axios.post(`${API}/workorders/`, {
    title: title,
  });
  return response.data.work_orders;
};


export const deleteWorkOrder = async(id) => {
  try {
    const response = await axios.delete(`${API}/workorders/?id=${id}`)
    return response.data.work_orders;
  } catch (error) {
    console.log(error);
    return null;
  }
};
