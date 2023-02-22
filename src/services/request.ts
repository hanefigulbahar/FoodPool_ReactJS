function request<T>(url: string, method: string = "GET") {
    return new Promise<T>(async (resolve, reject) => {
        const response = await fetch(process.env.REACT_APP_API_URL + url)
        const result = await response.json()
        if (response.ok === true && response.status === 200) {
            resolve(result)
        } else {
            reject(response.statusText)
        }
    })
}

export const get = <T>(url: string) => request<T>(url)