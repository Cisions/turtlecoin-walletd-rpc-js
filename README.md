# turtlecoin-walletd-rpc-js

A js wrapper for the TurtleCoin walletd JSON-RPC interface

## Example

```js
import TurtleCoinWalletd from 'turtlecoin-walletd-rpc-js'

let walletd = new TurtleCoinWalletd(
  'http://localhost',
  8070,
  'myRpcPassword'
)

walletd.getStatus()
.then(resp => {
  console.log(resp.body)
})
.catch(err => {
  console.log(err)
})

> {"id":0,"jsonrpc":"2.0","result":{"blockCount":240364,"knownBlockCount":0,"lastBlockHash":"f50dce59476febf23b07d45f3cbe8fbab13a0d79b4cf02b4314035327d2a3e79","peerCount":0}}
```

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

#### Using Module 'default'

```js
import TurtleCoinWalletd from 'turtlecoin-walletd-rpc-js'
```

or

```js
var TurtleCoinWalletd = require('turtlecoin-walletd-rpc-js').default
```

#### Using Named Import

```js
import { TurtleCoinWalletd } from 'turtlecoin-walletd-rpc-js'
```

or

```js
var { TurtleCoinWalletd } = require('turtlecoin-walletd-rpc-js').default
```

### Instantiating the RPC client

Construct an instance of the TurtleCoinWalletd class with host and port of running daemon along with the rpc password.  
An optional `boolean` arg may be passed to turn logging on or off.

```js
var walletd = new TurtleCoinWalletd(
  hostname,
  port,
  password,
  logging
)
```

Note: `hostname` must contain `http://` prefix.

### Using the RPC Client

Instance methods of TurtleCoinWalletd correspond to the JSON RPC method calls. Each method initiates an asynchronous HTTP request to the walletd daemon. Both *Promise* and *Callback* styles are supported.

Success callbacks pass a `response` object with `status`, `header`, and `body` properties.

Error callbacks pass an `error` object.

#### Promise Style

```js
walletd
  .getStatus()
  .then(resp => {
    console.log(resp.status)
    console.log(resp.headers)
    console.log(resp.body)
  })
  .catch(err => {
    console.log(err)
  })
```

#### Callback Style

```js
walletd.getStatus(
  resp => {
    console.log(resp.status)
    console.log(resp.headers)
    console.log(resp.body)
  },
  err => {
  console.log(err)
  }
)
```

### API

API docs with method/parameter information is in the works. Check back soon!

## Contribute

Fork the repo at <http://github.com/turtlecoin/turtlecoin-walletd-rpc-js>, create a feature branch  and subbmit PRs from feature branch to `master`

## Bugs/Issues/Feature Requests

File issues at <http://github.com/turtlecoin/turtlecoin-walletd-rpc-js/issues>

## Thanks

Big thanks to @fexra for bughunting, testing, feedback and other help.
