# newcoin.dao-js

JS Library to read data from newcoin.dao smart contract.

## Usage

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
npm install @newcoin-foundation/newcoin.dao-js
```

### Initialize

Web library can be found in the [dist] folder

```javascript
// standard import
const { ActionGenerator, ChainApi } = require("newcoindao");
// ES6 import
import { ActionGenerator, ChainApi } from "newcoindao";
```

## Documentation

### ChainApi

Uses only native nodeos calls to chain api plugin.

### ActionGenerator

Helper class to construct contract actions which can be pushed on chain with eosjs.