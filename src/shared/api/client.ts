type Options = {
  method: "GET" | "POST" | "PUT" | "DELETE"
}

export const client = async <T, U = unknown>(url: string, init: Options) => {
  const resp = await fetch(url, init)
  const { status } = resp
  if (status >= 200 && status < 300) {
    const data = resp.json() as T
    return { data, status }
  } else {
    const error = resp.json() as U
    return { error, status }
  }
}
