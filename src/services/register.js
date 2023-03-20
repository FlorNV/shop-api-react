const ADD_USER_ENDPOINT_URL = "https://dummyjson.com/users/add";

export const register = async (user) => {
  const res = await fetch(ADD_USER_ENDPOINT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  const data = await res.json();
  return data;
};
