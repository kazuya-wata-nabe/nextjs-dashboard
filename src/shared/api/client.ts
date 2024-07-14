type Options = {
  method: "GET" | "POST" | "PUT" | "DELETE"
}

type Result<T, U> = {
  status: number
} & (
  | {
      data: T
      error?: undefined
    }
  | {
      data?: undefined
      error: U
    }
)

export const client = async <T, U = unknown>(url: string, init: Options): Promise<Result<T, U>> => {
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
