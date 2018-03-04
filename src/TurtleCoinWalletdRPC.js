import * as rpc           from './rpcBuilders'
import { get }            from 'popsicle'

export class TurtleCoinWalletd {
  constructor(host, port, rpcPassword) {
    this.host        = host
    this.port        = port
    this.rpcPassword = rpcPassword
    this.id          = 0
  }

  sendXHR(payload, success, error) {
    return new Promise((resolve, reject) => {
      let url = `${this.host}:${this.port}/json_rpc`,
          id  = this.id

      console.log('************')
      console.log(`Sending HTTP request to walletd JSON-RPC interface at ${url}...`)
      console.log(`Request (id: ${id}):`)
      console.log(payload)
      console.log('************')

      get(url)
        .then(res => {
          console.log('************')
          console.log (`Request (id: ${id}) to walletd HTTP JSON-RPC interface successful!`)
          console.log(res.status)
          console.log(res.body)
          console.log(res.headers)
          console.log('************')

          success  ? success(res.body) : resolve(res.body)
        })
        .catch(err => {
          console.log('************')
          console.log(`Error sending request (id: ${id})`)
          console.log(err)
          console.log('************')

          error ? error(err) : resolve(err)
        })

      this.id++

    })
  }

  reset(viewSecretKey) {
    return this.sendXHR(
      rpc.reset(
        this.id,
        this.rpcPassword,
        viewSecretKey ? { viewSecretKey }
        : null
      )
    )
  }

  save() {
    return this.sendXHR(
      rpc.save(this.id, this.rpcPassword)
    )
  }

  getViewKey() {
    return this.sendXHR(
      rpc.getViewKey(this.id, this.rpcPassword)
    )
  }

  getSpendKeys(address) {
    return this.sendXHR(
      rpc.getSpendKeys(
        this.id,
        this.rpcPassword,
        { address }
      )
    )
  }

  getStatus() {
    return this.sendXHR(
      rpc.getStatus(this.id, this.rpcPassword)
    )
  }

  getAddresses() {
    return this.sendXHR(
      rpc.getAddresses(this.id, this.rpcPassword)
    )
  }

  createAddress(secretSpendKey, publicSpendKey) {
    return this.sendXHR(
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
    return this.sendXHR(
      rpc.deleteAddress(
        this.id,
        this.rpcPassword,
        { address }
      )
    )
  }
  getBalance(address) {
    return this.sendXHR(
      rpc.getBalance(
        this.id,
        this.rpcPassword,
        address ? { address }
        : null
      )
    )
  }

  getBlockHashes(firstBlockIndex, blockCount) {
    return this.sendXHR(
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
    return this.sendXHR(
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
    return this.sendXHR(
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
    return this.sendXHR(
      rpc.getUnconfirmedTransactionHashes(
        this.id,
        this.rpcPassword,
        addresses ? { addresses }
        : null
      )
    )
  }
  getTransaction(transactionHash) {
    return this.sendXHR(
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
    return this.sendXHR(
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
    return this.sendXHR(
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
    return this.sendXHR(
      rpc.getDelayedTransactionHashes(
        this.id,
        this.rpcPassword
      )
    )
  }

  deleteDelayedTransaction(transactionHash) {
    return this.sendXHR(
      rpc.deleteDelayedTransaction(
        this.id,
        this.rpcPassword,
        { transactionHash }
      )
    )
  }

  sendDelayedTransaction(transactionHash) {
    return this.sendXHR(
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
    return this.sendXHR(
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
    return this.sendXHR(
      this.id,
      this.rpcPassword,
      {
        threshold,
        ...(addresses && { addresses })
      }
    )
  }
}
