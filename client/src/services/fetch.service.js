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
    if (process.env.NODE_ENV === "production")
      url = `https://discord-oauth2-api.herokuapp.com/api${url}`
    else url = `/api${url}`
    let response = await fetch(url, {
      method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'include', 
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			  }
    })
    return response.json();
}
