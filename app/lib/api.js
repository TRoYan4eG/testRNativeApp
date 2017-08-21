class Api {
    static headers() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application-json',
            'dataType': 'json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-Mashape-Key': 'b276fcb7fd26a28b84af74c352d2a93974c53d0a'
        }
    }

    static get(route) {
        return this.xhr(route, null, 'GET')
    }

    static put(route, params) {
        return this.xhr(route, params, 'PUT')
    }

    static post(route, params) {
        return this.xhr(route, params, 'POST')
    }

    static xhr(route, params, verb) {
        const host = 'https://test.normalgame.net/'
        const url = `${host}${route}`
        let options = Object.assign({method: verb}, params ? {body: JSON.stringify(params)} : null)
        options.headers = Api.headers()
        return fetch(url, options).then( resp => {
            let json = resp.json()
            if (resp.ok) {
                return json;
            }
            return json.then(err => {throw  err})
        })
    }
}

export default Api