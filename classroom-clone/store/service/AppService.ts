export const SendGetRequest = async (url: string, token: string) =>
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer  ${token}`
        },
    })
        .then((response) => {
            return response.status === 200 ? response.json() : '';
        })
        .then((data) => {
            return data;
        })
        .catch(() => {

        });

export const SendPostRequest = async (url: string, payload: any) =>
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then((response) => {
            return response.status === 200 ? response.json() : '';
        })
        .then((data) => {
            return data;
        })
        .catch(() => {

        });


export const SendPostWithoutPayloadRequest = async (url: string) =>
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            return response.status === 200 ? response.json() : '';
        })
        .then((data) => {
            return data;
        })
        .catch(() => {

        });

export const SendPutRequest = async (url: string, payload: any) =>
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then((response) => {
            return response.status === 200 ? response.json() : '';
        })
        .catch(() => {

        });

export const SendDeleteRequest = async (url: string) =>
    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {

            return response.status === 200 ? response.json() : '';
        })
        .then((data) => {

        })
        .catch(() => {

        });