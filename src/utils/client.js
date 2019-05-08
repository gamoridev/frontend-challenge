import { clearToken, getToken } from 'utils'

class SomosClient {
  constructor() {}

  onError = error => {}

  async getArtists(queryString) {
    // Obs: para chamadas na api, você já tem o token salvo no cookie, `authenticated_token` - use ele para mandar no header das chamadas - da uma olhada no `src/utils`
    // retornar a lista de artistas - https://developer.spotify.com/console/get-several-artists/
	  return fetch(`https://api.spotify.com/v1/search?q=${queryString}&type=artist`, {
	    headers: {
	      Authorization: `Bearer ${getToken()}`
	    }
  	})
	    .then(response => {
	      return response.json();
	    })
  }
  async getAboutArtist(id) {
  	// Return info from artist based on id
	  return fetch(`https://api.spotify.com/v1/artists/${id}`, {
	    headers: {
	      Authorization: `Bearer ${getToken()}`
	    }
  	})
	    .then(response => {
	      return response.json();
	    })
  }
	async getAboutArtistAlbums(id) {
  	// Return info about artist's albums based on artists id limited to 10 results maximum
	  return fetch(`https://api.spotify.com/v1/artists/${id}/albums?limit=10`, {
	    headers: {
	      Authorization: `Bearer ${getToken()}`
	    }
  	})
	    .then(response => {
	      return response.json();
	    })
  }
}

export default SomosClient
