const buildRPC = (id, method, rpcPassword, params) => {
  return JSON.stringify({
    jsonrpc  : "2.0",
    id,
    method,
    password : rpcPassword,
    ...(params && { params })
  })
}

export function reset(id, rpcPassword, params) {
  return buildRPC(id, "reset", rpcPassword, params)
}

export function save(id, rpcPassword, params) {
  return buildRPC(id, "save", rpcPassword, params)
}

export function getViewKey(id, rpcPassword, params) {
  return buildRPC(id, "getViewKey", rpcPassword, params)
}

export function getSpendKeys(id, rpcPassword, params) {
  return buildRPC(id, "getSpendKeys", rpcPassword, params)
}

export function getStatus(id, rpcPassword, params) {
  return buildRPC(id, "getStatus", rpcPassword, params)
}

export function getAddresses(id, rpcPassword, params) {
  return buildRPC(id, "getAddresses", rpcPassword, params)
}

export function createAddress(id, rpcPassword, params) {
  return builRPC(id, "createAddress", rpcPassword, params)
}

export function deleteAddress(id, rpcPassword, params) {
  return buildRPC(id, "deleteAddress", rpcPassword, params)
}

export function getBalance(id, rpcPassword, params) {
  return buildRPC(id, "getBalance", rpcPassword, params)
}

export function getBlockHashes(id, rpcPassword, params) {
  return buildRPC(id, "getBlockHashes", rpcPassword, params)
}

export function getTransactionHashes(id, rpcPassword, params) {
  return buildRPC(id, "getTransactionHashes", rpcPassword, params)
}

export function getTransactions(id, rpcPassword, params) {
  return buildRPC(id, "getTransactions", rpcPassword, params)
}

export function getUnconfirmedTransactionHashes(id, rpcPassword, params) {
  return buildRPC(id, "getUnconfirmedTransactionHashes", rpcPassword, params)
}

export function getTransaction(id, rpcPassword, params) {
  return buildRPC(id, "getTransaction", rpcPassword, params)
}

export function sendTransaction(id, rpcPassword, params) {
  return buildRPC(id, "sendTransaction", rpcPassword, params)
}

export function createDelayedTransaction(id, rpcPassword, params) {
  return buildRPC(id, "createDelayedTransaction", rpcPassword, params)
}

export function getDelayedTransactionHashes(id, rpcPassword, params) {
  return buildRPC(id, "getDelayedTransactionHashes", rpcPassword, params)
}

export function deleteDelayedTransaction(id, rpcPassword, params) {
  return buildRPC(id, "deleteDelayedTransaction", rpcPassword, params)
}

export function sendDelayedTransaction(id, rpcPassword, params) {
  return buildRPC(id, "sendDelayedTransaction", rpcPassword, params)
}

export function sendFusionTransaction(id, rpcPassword, params) {
  return buildRPC(id, "sendFusionTransaction", rpcPassword, params)
}

export function estimateFusion(id, rpcPassword, params) {
  return buildRPC(id, "estimateFusion", rpcPassword, params)
}
