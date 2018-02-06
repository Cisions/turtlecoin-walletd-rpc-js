import * as rpc           from './rpcBuilders'
import { buildXHR }       from './buildXHR'

class TurtleCoinWalletd {
  constructor(host, port, id, rpcPassword) {
    this.host        = host
    this.port        = port
    this.id          = id
    this.rpcPassword = rpcPassword
  }

  sendXHR(payload, success, error) {
    return new Promise((resolve, reject) => {
      buildXHR(
        this.host,
        this.port,
        (callback ? callback  : resolve),
        (error    ? error     : reject)
      )
      .send(payload)

    })
  }

  reset(viewSecretKey) {
    this.sendXHR(
      rpc.reset(
        this.id,
        this.rpcPassword,
        viewSecretKey ? { viewSecretKey }
        : null
      )
    )
  }

  save() {
    this.sendXHR(
      rpc.save(this.id, this.rpcPassword)
    )
  }

  getViewKey() {
    this.sendXHR(
      rpc.getViewKey(this.id, this.rpcPassword)
    )
  }

  getSpendKeys(address) {
    this.sendXHR(
      rpc.getSpendKeys(
        this.id,
        this.rpcPassword,
        { address }
      )
    )
  }

  getStatus() {
    this.sendXHR(
      rpc.getStatus(this.id, this.rpcPassword)
    )
  }

  getAddresses() {
    this.sendXHR(
      rpc.getAddresses(this.id, this.rpcPassword)
    )
  }

  createAddress(secretSpendKey, publicSpendKey) {
    this.sendXHR(
      rpc.createAddress(
        this.id,
        this.rpcPassword,
        {
          ...(secretSpendKey && { secretSpendKey }),
          ...(publicSpendKey && { publicSpendKey })

        }
      )
    )
  }

  deleteAddress(address) {
    this.sendXHR(
      rpc.deleteAddress(
        this.id,
        this.rpcPassword,
        { address }
      )
    )
  }
  getBalance(address) {
    this.sendXHR(
      rpc.getBalance(
        this.id,
        this.rpcPassword,
        address ? { address }
        : null
      )
    )
  }

  getBlockHashes(firstBlockIndex, blockCount) {
    this.sendXHR(
      rpc.getBlockHashes(
        this.id,
        this.rpcPassword,
        {
          firstBlockIndex,
          blockCount
        }
      )
    )
  }

  getTransactionHashes(
    blockCount,
    firstBlockIndex,
    blockHash,
    addresses,
    paymentId
  ) {
    this.sendXHR(
      rpc.getTransactionHashes(
        this.id,
        this.rpcPassword,
        {
          blockCount,
          ...(firstBlockIndex && { firstBlockIndex }),
          ...(blockHash       && { blockHash }),
          ...(addresses       && { addresses }),
          ...(paymentId       && { paymentId })
        }
      )
    )
  }
  getTransactions(
    blockCount,
    firstBlockIndex,
    blockHash,
    addresses,
    paymentId
  ) {
    this.sendXHR(
      rpc.getTransactions(
        this.id,
        this.rpcPassword,
        {
          blockCount,
          ...(firstBlockIndex && { firstBlockIndex }),
          ...(blockHash       && { blockHash }),
          ...(addresses       && { addresses }),
          ...(paymentId       && { paymentId })
        }
      )
    )
  }

  getUnconfirmedTransactionHashes(addresses) {
    this.sendXHR(
      rpc.getUnconfirmedTransactionHashes(
        this.id,
        this.rpcPassword,
        address ? { address }
        : null
      )
    )
  }
  getTransaction(transactionHash) {
    this.sendXHR(
      rpc.getTransaction(
        this.id,
        this.rpcPassword,
        { transactionHash }
      )
    )
  }

  sendTransaction(
    anonymity,
    transfers,
    fee,
    addresses,
    unlockTime,
    extra,
    paymentId,
    changeAddress
  ) {
    this.sendXHR(
      rpc.sendTransaction(
        this.id,
        this.rpcPassword,
        {
          anonymity,
          transfers,
          fee,
          ...(addresses  && { addresses }),
          ...(unlockTime && { unlockTime  }),
          ...(extra      && { extra }),
          ...(paymentId  && { paymentId }),
          ...(changeAddress && { changeAddress })
        }
      )
    )
  }

  createDelayedTransaction() {
    this.sendXHR(
      rpc.createDelayedTransaction(
        this.id,
        this.rpcPassword,
        {
          anonymity,
          transfers,
          fee,
          ...(addresses  && { addresses }),
          ...(unlockTime && { unlockTime  }),
          ...(extra      && { extra }),
          ...(paymentId  && { paymentId }),
          ...(changeAddress && { changeAddress })
        }
      )
    )
  }

  getDelayedTransactionHashes() {
    this.sendXHR(
      rpc.getDelayedTransactionHashes(
        this.id,
        this.rpcPassword
      )
    )
  }

  deleteDelayedTransaction(transactionHash) {
    this.sendXHR(
      rpc.deleteDelayedTransaction(
        this.id,
        this.rpcPassword,
        { transactionHash }
      )
    )
  }

  sendDelayedTransaction(transactionHash) {
    this.sendXHR(
      rpc.sendDelayedTransaction(
        this.id,
        this.rpcPassword,
        { transactionHash }
      )
    )
  }

  sendFusionTransaction(
    threshold,
    anonymity,
    addresses,
    destinationAddress
  ) {
    this.sendXHR(
      this.id,
      this.rpcPassword,
      {
        threshold,
        anonymity,
        ...(addresses && { addresses }),
        ...(destinationAddress && { destinationAddress })
      }
    )
  }

  estimateFusion(threshold, addresses) {
    this.sendXHR(
      this.id,
      this.rpcPassword,
      {
        threshold,
        ...(addresses && { addresses })
      }
    )
  }
}
