function request<T>(url: string, method: string = "GET", data?: T) {
  return new Promise<T>(async (resolve, reject) => {
    let response: Response;

    if (method === "POST" && data) {
      response = await fetch(process.env.REACT_APP_API_URL + url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      response = await fetch(process.env.REACT_APP_API_URL + url);
    }

    const result = await response.json();

    if (response.ok === true) {
      resolve(result);
    } else {
      reject(response.statusText);
    }
  });
}

export const get = <T>(url: string, method: string) => request<T>(url, method);
export const post = <T>(url: string, method: string, data: T) =>
  request<T>(url, method, data);
