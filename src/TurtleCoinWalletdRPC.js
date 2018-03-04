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

  reset(viewSecretKey, sucess, error) {
    return this.sendXHR(
      rpc.reset(
        this.id,
        this.rpcPassword,
        viewSecretKey ? { viewSecretKey }
        : null
      ),
      success,
      error
    )
  }

  save(success, error) {
    return this.sendXHR(
      rpc.save(this.id, this.rpcPassword),
      success,
      error
    )
  }

  getViewKey(success, error) {
    return this.sendXHR(
      rpc.getViewKey(this.id, this.rpcPassword),
      success, error
    )
  }

  getSpendKeys(address, success, error) {
    return this.sendXHR(
      rpc.getSpendKeys(
        this.id,
        this.rpcPassword,
        { address }
      ),
      success,
      error
    )
  }

  getStatus(success, error) {
    return this.sendXHR(
      rpc.getStatus(this.id, this.rpcPassword),
      success,
      error
    )
  }

  getAddresses(success, error) {
    return this.sendXHR(
      rpc.getAddresses(this.id, this.rpcPassword),
      success, error
    )
  }

  createAddress(secretSpendKey, publicSpendKey, success, error) {
    return this.sendXHR(
      rpc.createAddress(
        this.id,
        this.rpcPassword,
        {
          ...(secretSpendKey && { secretSpendKey }),
          ...(publicSpendKey && { publicSpendKey })

        }
      ),
      success,
      error
    )
  }

  deleteAddress(address, success, error) {
    return this.sendXHR(
      rpc.deleteAddress(
        this.id,
        this.rpcPassword,
        { address }
      ),
      success,
      error
    )
  }
  getBalance(address, success, error) {
    return this.sendXHR(
      rpc.getBalance(
        this.id,
        this.rpcPassword,
        address ? { address }
        : null
      ),
      success,
      error
    )
  }

  getBlockHashes(firstBlockIndex, blockCount, success, error) {
    return this.sendXHR(
      rpc.getBlockHashes(
        this.id,
        this.rpcPassword,
        {
          firstBlockIndex,
          blockCount
        }
      ),
      success,
      error
    )
  }

  getTransactionHashes(
    blockCount,
    firstBlockIndex,
    blockHash,
    addresses,
    paymentId,
    success,
    error
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
      ),
      success,
      error
    )
  }
  getTransactions(
    blockCount,
    firstBlockIndex,
    blockHash,
    addresses,
    paymentId,
    success,
    error
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
      ),
      success,
      error
    )
  }

  getUnconfirmedTransactionHashes(addresses, success, error) {
    return this.sendXHR(
      rpc.getUnconfirmedTransactionHashes(
        this.id,
        this.rpcPassword,
        addresses ? { addresses }
        : null
      ),
      success,
      error
    )
  }

  getTransaction(transactionHash, success, error) {
    return this.sendXHR(
      rpc.getTransaction(
        this.id,
        this.rpcPassword,
        { transactionHash }
      ),
      success,
      error
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
    changeAddress,
    success,
    error
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
      ),
      success,
      error
    )
  }

  createDelayedTransaction(success, error) {
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
      ),
      sucess,
      error
    )
  }

  getDelayedTransactionHashes(success, error) {
    return this.sendXHR(
      rpc.getDelayedTransactionHashes(
        this.id,
        this.rpcPassword
      ),
      success,
      error
    )
  }

  deleteDelayedTransaction(transactionHash, success, error) {
    return this.sendXHR(
      rpc.deleteDelayedTransaction(
        this.id,
        this.rpcPassword,
        { transactionHash }
      ),
      success,
      error
    )
  }

  sendDelayedTransaction(transactionHash, success, error) {
    return this.sendXHR(
      rpc.sendDelayedTransaction(
        this.id,
        this.rpcPassword,
        { transactionHash }
      ),
      success,
      error
    )
  }

  sendFusionTransaction(
    threshold,
    anonymity,
    addresses,
    destinationAddress,
    success,
    error
  ) {
    return this.sendXHR(
      rpc.sendFusionTransaction(
        this.id,
        this.rpcPassword,
        {
          threshold,
          anonymity,
         ...(addresses && { addresses }),
         ...(destinationAddress && { destinationAddress })
        }
      ),
      success,
      error
    )
  }

  estimateFusion(threshold, addresses, success, error) {
    return this.sendXHR(
      rpc.estimateFusion(
        this.id,
        this.rpcPassword,
        {
          threshold,
          ...(addresses && { addresses })
        }
      ),
      success,
      error
    )
  }
}
