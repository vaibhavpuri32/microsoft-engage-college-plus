export function makeGetRequest(url) {
  let headers = { "Content-Type": "application/json" };
  if (localStorage.token) {
    headers = { ...headers, Authorization: `Token ${localStorage.token}` };
  }
  console.log(headers);
  return fetch(url, {
    method: "GET",
    headers,
  });
}

export function makePostRequest(url, body) {
  let headers = { "Content-Type": "application/json" };
  if (localStorage.token) {
    headers = { ...headers, Authorization: `Token ${localStorage.token}` };
  }
  console.log(headers);
  return fetch(url, {
    method: "POST",
    headers,
    body,
  });
}

// export function getUserRequet() {
//   const responseData1 = await makeGetRequest(
//     "http://127.0.0.1:8000/accounts/me"
//   );
//   const data1 = await responseData1.json();
//   username = data1["username"];

//   return username
// }
