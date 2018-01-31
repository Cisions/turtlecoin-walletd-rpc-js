import * as rpc           from './rpcBuilders'
import { buildXHR }       from './buildXHR'

class TurtleCoinWalletd {
  constructor(host, port, id) {
    this.host = host
    this.port = port
    this.id   = id
  }

  sendXHR(payload) {
    buildXHR(this.host, this.port)
    .send(payload)
  }

  reset(viewSecretKey) {
    this.sendXHR(
      rpc.reset(
        this.id,
        viewSecretKey ? { viewSecretKey }
        : null
      )
    )
  }

  save() {
    this.sendXHR(
      rpc.save(this.id)
    )
  }

  getViewKey() {
    this.sendXHR(
      rpc.getViewKey(this.id)
    )
  }

  getSpendKeys(address) {
    this.sendXHR(
      rpc.getSpendKeys(
        this.id,
        { address }
      )
    )
  }

  getStatus() {
    this.sendXHR(
      rpc.getStatus(this.id)
    )
  }

  getAddresses() {
    this.sendXHR(
      rpc.getAddresses(this.id)
    )
  }

  createAddress(secretSpendKey, publicSpendKey) {
    this.sendXHR(
      rpc.createAddress(
        this.id,
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
        { address }
      )
    )
  }
  getBalance(address) {
    this.sendXHR(
      rpc.getBalance(
        this.id,
        address ? { address }
        : null
      )
    )
  }

  getBlockHashes(firstBlockIndex, blockCount) {
    this.sendXHR(
      rpc.getBlockHashes(
        this.id,
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
        address ? { address }
        : null
      )
    )
  }
  getTransaction(transactionHash) {
    this.sendXHR(
      rpc.getTransaction(
        this.id,
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
        this.id
      )
    )
  }

  deleteDelayedTransaction(transactionHash) {
    this.sendXHR(
      rpc.deleteDelayedTransaction(
        this.id,
        { transactionHash }
      )
    )
  }

  sendDelayedTransaction(transactionHash) {
    this.sendXHR(
      rpc.sendDelayedTransaction(
        this.id,
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
      {
        threshold,
        ...(addresses && { addresses })
      }
    )
  }
}
