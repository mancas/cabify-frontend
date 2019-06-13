# Cabify cart test

As you can see this is the compiled code, ready to be deployed on production. To get the full code, please visit my [repo](https://github.com/mancas/cabify-frontend) where you can find the source code and all the stuff used to develop the test.

## How to use it

I suggest to visit my [playground](https://playground.aloy.ovh/) where this code is deployed using Docker, so you can test the features required.

But if you want to test it on your own, I will recommend you to install a local nginx that points to this folder. Or if you prefer to avoid installing things, please clone my repo locally and execute **yarn** and once the command finished, execute **yarn start** to start a local server at port 3000.

And don't forget that you can visit the product page by clicking on the product name.

## Technologies

To develop this cart, I've choosen **React + Redux + RxJS + Redux-Observable**, but why did I choose that ones? React provides the power of WebComponents concept and it's easy to separate the logic of each part of the application, meanwhile redux keep the data state sound and safe and RxJS + redux-observable turn the compute of the promotions, into an easy task.

You can also see weir class names, that's because I've also applied CSS Modules to avoid class collisions, also that allowed me to remove useless classes need to avoid that problem.

## Promotions

The promotions are calculated following this JSON:

```javascript
pricingRules = {
  PROMO: [
    {
      type: 'promo',
      name: '2x1',
      itemsNeeded: 2,
      pricePerUnit: 2.5,
      applyTo: ['CAP']
    }
  ],
  BULK: [
    {
      type: 'bulk',
      name: 'x3',
      itemsNeeded: 3,
      pricePerUnit: 19,
      applyTo: ['SHIRT']
    }
  ],
  VOUCHER: [
    {
      type: 'voucher',
      code: 'CABIFY20',
      discount: 4 || '20%',
      applyTo: []
    }
  ]
}
```

So the main idea to make it scalable and flexible is to provide a mechanism to allow multiples promo types applied to different product codes. That's why you can see an array for each promo type.

Just imagine you want to apply a new promo **3x1** but only to **MUG** products, the only thing we need to add is a new _promo_ object.
