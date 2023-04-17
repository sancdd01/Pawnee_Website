import axios from "axios";

export const signUp = async (
  firstName,
  lastName,
  email,
  password,
  department
) => {
  let response = await axios.post("signup", {
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password,
    department: department,
  });
  return response.data.success;
};

export const logIn = async (email, password) => {
  let response = await axios.post("signin", {
    email: email,
    password: password,
  });
  console.log(response.data.signin);
  window.location.reload();
  return response.data.success;
};

export const currUser = async () => {
  let response = await axios.get("curruser");
  console.log(response.data);
  return response.data;
};

export const logOut = async (setNewUser) => {
  let response = await axios.post("signout");
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
