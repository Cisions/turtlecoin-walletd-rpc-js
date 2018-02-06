const buildRPC = (method, id, password, params) => {
  return JSON.stringify({
    jsonrpc  : "2.0",
    method,
    id,
    ...(password && { password})
    ...(params    && { params })
  })
}

export function reset(
  id,
  rpcPassword,
  params
) {
  return buildRPC"reset", id, rpcPassword, params)
}

export function save(
  id,
  rpcPassword,
  params
) {
  return buildRPC"save", id, rpcPassword, params)
}

export function getViewKey(
  id,
  rpcPassword,
  params
) {
  return buildRPC"getViewKey", id, rpcPassword, params)
}

export function getSpendKeys(
  id,
  rpcPassword,
  params
) {
  return buildRPC"getSpendKeys", id, rpcPassword, params)
}

export function getStatus(
  id,
  rpcPassword,
  params
) {
  return buildRPC"getStatus", id, rpcPassword, params)
}

export function getAddresses(
  id,
  rpcPassword,
  params
) {
  return buildRPC"getAddresses", id, rpcPassword, params)
}

export function createAddress(
  id,
  rpcPassword,
  params
) {
  return builRPC"createAddress", id, rpcPassword, params)
}

export function deleteAddress(
  id,
  rpcPassword,
  params
) {
  return buildRPC"deleteAddress", id, rpcPassword, params)
}

export function getBalance(
  id,
  rpcPassword,
  params
) {
  return buildRPC"getBalance", id, rpcPassword, params)
}

export function getBlockHashes(
  id,
  rpcPassword,
  params
) {
  return buildRPC"getBlockHashes", id, rpcPassword, params)
}

export function getTransactionHashes(
  id,
  rpcPassword,
  params
) {
  return buildRPC"getTransactionHashes", id, rpcPassword, params)
}

export function getTransactions(
  id,
  rpcPassword,
  params
) {
  return buildRPC"getTransactions", id, rpcPassword, params)
}

export function getUnconfirmedTransactionHashes(
  id,
  rpcPassword,
  params
) {
  return buildRPC"getUnconfirmedTransactionHashes", id, rpcPassword, params)
}

export function getTransaction(
  id,
  rpcPassword,
  params
) {
  return buildRPC"getTransaction", id, rpcPassword, params)
}

export function sendTransaction(
  id,
  rpcPassword,
  params
) {
  return buildRPC"sendTransaction", id, rpcPassword, params)
}

export function createDelayedTransaction(
  id,
  rpcPassword,
  params
) {
  return buildRPC"createDelayedTransaction", id, rpcPassword, params)
}

export function getDelayedTransactionHashes(
  id,
  rpcPassword,
  params
) {
  return buildRPC"getDelayedTransactionHashes", id, rpcPassword, params)
}

export function deleteDelayedTransaction(
  id,
  rpcPassword,
  params
) {
  return buildRPC"deleteDelayedTransaction", id, rpcPassword, params)
}

export function sendDelayedTransaction(
  id,
  rpcPassword,
  params
) {
  return buildRPC"sendDelayedTransaction", id, rpcPassword, params)
}

export function sendFusionTransaction(
  id,
  rpcPassword,
  params
) {
  return buildRPC"sendFusionTransaction", id, rpcPassword, params)
}

export function estimateFusion(
  id,
  rpcPassword,
  params
) {
  return buildRPC"estimateFusion", id, rpcPassword, params)
}
