export const post = async (url = '', data = {}) => {
    url = process.env.NODE_ENV === "production"
      ? `https://discord-oauth2-api.herokuapp.com/api${url}`
      : `/api${url}`
    const response = await fetch(url, {
      method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
      credentials: 'include',
      body: JSON.stringify(data),
			headers: {
				'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': `https://discord-oauth2-api.herokuapp.com`
			  }
    });
    return response.json();
}

export const get = async (url = '') => {
    url = process.env.NODE_ENV === "production"
      ? `https://discord-oauth2-api.herokuapp.com/api${url}`
      : `/api${url}`
    console.debug(url)
    let response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
			cache: 'no-cache',
			headers: {
				'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin': 'https://discord-oauth2-client.herokuapp.com'
			  }
    })
    return response.json();
}
