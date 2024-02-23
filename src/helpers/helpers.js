const setUser = (userDetails) => {
  localStorage.setItem("userDetails", JSON.stringify(userDetails));
};

const getUser = () => {
  return JSON.parse(localStorage.getItem("userDetails"));
};

export { setUser, getUser };
