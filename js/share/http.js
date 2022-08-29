async function httpPost(url, data) {
    return new Promise((resolve, reject) => {
        const options = {
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
        }
        fetch(url, options).then(function (response) {
           return response.json();
        }).then(function (jsonString) {
           resolve(jsonString);
        });
    });
}

async function httpGet(url, data) {
    return new Promise((resolve, reject) => {
        let urlContent = new URL(url);
        if (data != null) {
            Object.keys(data).forEach(key => urlContent.searchParams.append(key, data[key]))
        }

        fetch(urlContent).then(function (response) {
            return response.json();
        }).then(function (jsonString) {
            resolve(jsonString);
        });
    });
}

 