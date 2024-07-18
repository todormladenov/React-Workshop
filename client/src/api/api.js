async function requester(method, url, data) {
    let options = {
        method,
    }

    if (data != undefined) {
        options.headers = { 'content-type': 'application/json' }
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options)

    return response.json();
}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');