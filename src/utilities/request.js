
export default function Request(url, options = { method: 'GET' }) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onreadystatechange = (e) => {
            if (req.readyState !== 4) {
                return;
            }
    
            if (req.status === 200) {
                console.log('req', req)
                resolve(req.responseText)
            } else {
                reject(req.statusText)
            }
        }
        req.open(options.method, url)
        req.send()
    });
}
