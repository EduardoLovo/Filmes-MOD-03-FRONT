export const Api = {
    url: 'http://localhost:3000/filmes/',

    fetchGet: () => fetch(Api.url),

    fetchGetById: (id) => fetch(Api.url + id),

    fetchPost: (filme) => {
        return fetch(Api.url + 'add', {
            method: 'POST',
            headers: new Headers({
                "Content-type": "application/json"
            }),
            body: JSON.stringify(filme)
        })
    },

    fetchPut: (filme, id) => {
        return fetch(Api.url + 'update/' + id, {
            method: 'PUT',
            headers: new Headers({
                "Content-type": "application/json"
            }),
            body: JSON.stringify(filme)
        })
    }
}