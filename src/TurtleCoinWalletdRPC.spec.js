import { TurtleCoinWalletd } from './TurtleCoinWalletdRPC'


const host      = 'http://localhost',
      port      = 8081,
      password  = 'password'

describe('TurtleCionWalletd', () => {
  describe('getViewKey()', () => {
    it('works', () => {
      let tc = new TurtleCoinWalletd(host, port, password)

      console.log(
        tc.getViewKey()
        .then(function(res) { console.log(res) })
        .catch(function(err) { console.log('error - ', err) })
      )
    })
  })
})
