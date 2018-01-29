export function reset(id, viewSecretKey. xhr) {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0"
    id,
    method  : "reset",
    params  : {
      viewSecretKey
    }
  }))
}

export function save(id, xhr) {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0"
    id,
    method  : "save"
  }))
}

export function getViewKey(id, xhr) {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0"
    id,
    method  : "getViewKey"
  }))
}

export function getSpendKeys(id, address, xhr) {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0"
    id,
    method  : "getSpendKeys,
    params  : {
      address
    }
  }))
}

export function getStatus(id, xhr) {

  xhr.send(JSON.stringify({
    jsonrpc : "2.0"
    id,
    method  : "getStatus"
  }))
}

export function getAddresses(id, xhr) {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0"
    id,
    method  : "getAddresses"
  }))
}

export function createAddress(id, secretSpendKey, publicSpendKey, xhr) {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0"
    id,
    method  : "createAddress",
    params  : {
      ...secretSpendKey && {secretSpendKey},
      ...publicSpendKey && {publicSpendKey}
    }
  }))
}

export function deleteAddress(id, address, xhr) {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0"
    id,
    method  : "deleteAddress",
    params  : {
      address
    }
  }))
}

export function getBalance(id, address, xhr) {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0"
    id,
    method  : "getBalance",
    params  : {
      address
    }
  }))
}

export function getBlockHashes(id, firstBlockIndex, blockCount, xhr) {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0"
    id,
    method  : "getBlockHashes",
    params  : {
      blockCount,
      firstBlockIndex
    }
  }))
}

export function getTransactionHashes(
  id,
  blockCount,
  firstBlockIndex,
  blockHash,
  paymentId,
  addresses,
  xhr
) {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0"
    id,
    method  : "getTransactionHashes"
  }))
}

export function getTransactionHashes(
  id,
  blockCount,
  firstBlockIndex,
  blockHash,
  paymentId,
  addresses,
  xhr
) {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0"
    id,
    method  : "getTransactions"
  }))
}

export function getUnconfirmedTransactionHashes(
  id,
  addresses,
  xhr
) {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0"
    id,
    method  : "getUnconfirmedTransactionHashes"
  }))
}

export function getTransaction() {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0"
    id,
    method  : "save"
  }))
}

export function sendTransaction() {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0"
    id,
    method  : "save"
  }))
}

export function createDelayedTransaction() {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0"
    id,
    method  : "save"
  }))
}

export function getDelayedTransactionHashes() {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0"
    id,
    method  : "save"
  }))
}

export function deleteDelayedTransaction() {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0"
    id,
    method  : "save"
  }))
}

export function sendDelayedTransaction() {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0"
    id,
    method  : "save"
  }))
}

export function sendFusionTransaction() {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0"
    id,
    method  : "save"
  }))
}

export function estimateFusion() {
  xhr.send(JSON.stringify({
    jsonrpc : "2.0"
    id,
    method  : "save"
  }))
}
