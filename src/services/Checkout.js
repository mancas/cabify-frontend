/*

  pricingRules = {
    items: {
      CODE: {
        code: <string>,
        name: <string>,
        price: <integer>
      }
    },
    discounts: {
      CAP: [{

      }],
      SHIRT: [{

      }]
    }
  }

*/

class Checkout {
  _pricingRules

  constructor(pricingRules) {
    this._pricingRules = pricingRules
  }

  set pricingRules(pricingRules) {
    this._pricingRules = pricingRules
  }

  get pricingRules() {
    return this._pricingRules
  }

  scan = itemType => {}
}

export default Checkout
