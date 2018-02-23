# turtlecoin-walletd-rpc-js

A js wrapper for the TurtleCoin walletd JSON-RPC interface

## Installation

Install with npm

```bash
npm install turtlecoin-walletd-rpc-js
```

or

```bash
npm install turtlecoin-walletd-rpc-js --save
```

## Usage

### Import
First, import / require TurtleCoinWalletd

```js
import TurtleCoinWalletd from 'turtlecoin-walletd-rpc-js'
```

or

```js
var TurtleCoinWalletd = require('turtlecoin-walletd-rpc-js')
```

### Instantiating the RPC client

Construct an instance of the TurtleCoinWalletd class with host and port of running daemon and id of your client

```js
var walletd = new TurtleCoinWalletd(
  host,
  port,
  id
)
```

### Interacting with the RPC Client

Instance methods of TurtleCoinWalletd correspond to the JSON RPC method calls.
