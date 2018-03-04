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
var TurtleCoinWalletd = require('turtlecoin-walletd-rpc-js').default
```

### Instantiating the RPC client

Construct an instance of the TurtleCoinWalletd class with host and port of running daemon along with the rpc password

```js
var walletd = new TurtleCoinWalletd(
  hostname,
  port,
  password
)
```

Note that `hostname` must contain `http://` prefix.

### Using the RPC Client

Instance methods of TurtleCoinWalletd correspond to the JSON RPC method calls. Each method initiates an asynci HTTP request to the walletd daemon and returns a `Promise` of the HTTP response. Optional success and error callbacks may be provided, or calls may be written in promise style with `.then()` and `.catch()` methods
