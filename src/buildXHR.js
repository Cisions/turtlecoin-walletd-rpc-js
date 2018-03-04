import XMLHttpRequest from 'xmlhttprequest'

const buildXHR = (host, port, success, error) => {
  const xhr = new XMLHttpRequest.XMLHttpRequest()
  xhr.open('POST', `${host}:${port}/json_rpc`)
  xhr.setRequestHeader("Content-type", "application/json")
  xhr.setRequestHeader("Accept", "application/json")

  xhr.onload = () => {
    success(JSON.parse(xhr.responseText))
  }

  xhr.onerror = (err) => {
    error(err)
  }

  return xhr
}

export { buildXHR }
