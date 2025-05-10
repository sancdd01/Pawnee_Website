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
  let response = await axios.get(`${import.meta.env.VITE_API_URL}/curr_user`,);
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

export const getTasks = async () => {
  let response = await axios.get("/workorders/");
  return response.data.work_orders;
};

export const createWorkOrder = async (title) => {
  let response = await axios.post("/workorders/", {
    title: title,
  });
  return response.data.work_orders;
};

// export const deleteWorkOrder = async (id) => {
//   let response = await axios.delete(`/workorders/${id}`);
//   return response.data.work_orders;
// };

export const deleteWorkOrder = (id) => {
  axios
    .delete(`http://127.0.0.1:8000/workorders/?id=${id}`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
