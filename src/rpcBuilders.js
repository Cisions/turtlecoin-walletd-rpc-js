const buildRPC = (id, method, params) => {
  return {
    jsonrpc  : "2.0",
    id,
    method,
    ...(params && { params })
  }
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

export function getTransaction() {
  return buildRPC(id, "getTransaction", params)
}

export function sendTransaction() {
  return buildRPC(id, "sendTransaction", params)
}

export function createDelayedTransaction() {
  return buildRPC(id, "createDelayedTransaction", params)
}

export function getDelayedTransactionHashes() {
  return buildRPC(id, "getDelayedTransactionHashes", params)
}

export function deleteDelayedTransaction() {
  return buildRPC(id, "deleteDelayedTransaction", params)
}

export function sendDelayedTransaction() {
  return buildRPC(id, "sendDelayedTransaction", params)
}

export function sendFusionTransaction() {
  return buildRPC(id, "sendFusionTransaction", params)
}

export function estimateFusion() {
  return buildRPC(id, "estimateFusion", params)
}
