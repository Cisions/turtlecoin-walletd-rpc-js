const buildRPC = (id, method, params) => {
  return JSON.stringify({
    jsonrpc  : "2.0",
    id,
    method,
    ...(params && { params })
  })
}

export function reset(id, params) {
  return buildRPC(id, "reset", params)
}

export function save(id, params) {
  return buildRPC(id, "save", params)
}

export function getViewKey(id, params) {
  return buildRPC(id, "getViewKey", params)
}

export function getSpendKeys(id, params) {
  return buildRPC(id, "getSpendKeys", params)
}

export function getStatus(id, params) {
  return buildRPC(id, "getStatus", params)
}

export function getAddresses(id, params) {
  return buildRPC(id, "getAddresses", params)
}

export function createAddress(id, params) {
  return builRPC(id, "createAddress", params)
}

export function deleteAddress(id, params) {
  return buildRPC(id, "deleteAddress", params)
}

export function getBalance(id, params) {
  return buildRPC(id, "getBalance", params)
}

export function getBlockHashes(id, params) {
  return buildRPC(id, "getBlockHashes", params)
}

export function getTransactionHashes(id, params) {
  return buildRPC(id, "getTransactionHashes", params)
}

export function getTransactions(id, params) {
  return buildRPC(id, "getTransactions", params)
}

export function getUnconfirmedTransactionHashes(id, params) {
  return buildRPC(id, "getUnconfirmedTransactionHashes", params)
}

export function getTransaction(id, params) {
  return buildRPC(id, "getTransaction", params)
}

export function sendTransaction(id, params) {
  return buildRPC(id, "sendTransaction", params)
}

export function createDelayedTransaction(id, params) {
  return buildRPC(id, "createDelayedTransaction", params)
}

export function getDelayedTransactionHashes(id, params) {
  return buildRPC(id, "getDelayedTransactionHashes", params)
}

export function deleteDelayedTransaction(id, params) {
  return buildRPC(id, "deleteDelayedTransaction", params)
}

export function sendDelayedTransaction(id, parmas) {
  return buildRPC(id, "sendDelayedTransaction", params)
}

export function sendFusionTransaction(id, params) {
  return buildRPC(id, "sendFusionTransaction", params)
}

export function estimateFusion(id, params) {
  return buildRPC(id, "estimateFusion", params)
}
