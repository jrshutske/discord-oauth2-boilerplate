export const post = async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'include', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
}

export const get = async (url = '') => {
    const response = await fetch(`/api${url}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'include', 
      headers: {
        'Content-Type': 'application/json'
      },
    });
    return response.json();
}
