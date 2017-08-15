const url = 'http://localhost:3000/api/v1';

export function getAllUsers() {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const option = {
    method: 'GET',
    headers,
  };

  return fetch(`${url}/user/all`, option)
    .then(response => response.json())
    .then(data => data);
}


export function getUserPage(page) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const option = {
    method: 'GET',
    headers,
  };

  return fetch(`${url}/user/page?page=${page}&size=10`, option)
    .then(response => response.json())
    .then(data => data);
}

export function postUser(file) {
  const data = new FormData();

  data.append('csv', file);
  const option = {
    method: 'POST',
    body: data,
  };

  return fetch(`${url}/user/csvImport`, option)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(res => res);
}
