const LOGIN_ENDPOINT_URL = "https://dummyjson.com/auth/login";

export const login = async (body) => {
  const res = await fetch(LOGIN_ENDPOINT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data;
};
