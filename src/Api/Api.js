export const Api = {
    url: 'http://localhost:3000/filmes',

    fetchGet: () => fetch(Api.url),

    fetchGetById: (id) => fetch(Api.url + '/' + id),

    fetchPost: (body) => {
        return fetch(Api.url + '/add', {
            method: 'POST',
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify(body)
        })
    },

    fetchPut: (body, id) => {
        return fetch(Api.url + '/update/' + id, {
            method: 'PUT',
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify(body)
        })
    },

    fetchDelete: (id) => {
        return fetch(Api.url + '/delete/' + id, {
            method: 'DELETE'
        })
    }
}