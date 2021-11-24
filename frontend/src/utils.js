export function makeGetRequest(url) {
  let headers = { "Content-Type": "application/json" };
  if (localStorage.token) {
    headers = { ...headers, Authorization: `Token ${localStorage.token}` };
  }
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
  return fetch(url, {
    method: "POST",
    headers,
    body,
  });
}

export function makePutRequest(url, body) {
  let headers = { "Content-Type": "application/json" };
  if (localStorage.token) {
    headers = { ...headers, Authorization: `Token ${localStorage.token}` };
  }
  return fetch(url, {
    method: "PUT",
    headers,
    body,
  });
}

export function getdateinISO(start_time) {
  const year = start_time.substring(0, 4);
  const month = start_time.substring(5, 7);
  const date = start_time.substring(8, 10);
  const hour = start_time.substring(11, 13);
  const minute = start_time.substring(14, 16);
  return year + "-" + month + "-" + date + "T" + hour + ":" + minute;
}
