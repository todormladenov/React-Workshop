async function requester(method, url, data) {
    let options = {
        method,
        headers: {}
    }

    const accessToken = sessionStorage.getItem('accessToken');

    if (accessToken) {
        options.headers['X-Authorization'] = accessToken;
    }

    if (data != undefined) {
        options.headers['content-type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);

        if (response.status === 204) {
            return response;
        }

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message)
        }
        
        return response.json();
    } catch (error) {
        throw error
    }


}

export const get = requester.bind(null, 'GET');
export const post = requester.bind(null, 'POST');
export const put = requester.bind(null, 'PUT');
export const del = requester.bind(null, 'DELETE');