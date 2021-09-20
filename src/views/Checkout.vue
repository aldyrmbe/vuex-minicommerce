<template>
  <div class="cart">
    <h1>Checkout</h1>
    <div class="checkout">
        <div class="checkout-shipping">
          <h2> Shipping </h2>
          <ul>
            <li>
              <label for="jne">
                <input id="jne" name="shipping" type="radio"> JNE
              </label>
            </li>
            <li>
              <label for="sicepat">
                <input id="sicepat" name="shipping" type="radio"> Sicepat
              </label>
            </li>
            <li>
              <label for="gojek">
                <input id="gojek" name="shipping" type="radio"> Gojek
              </label>
            </li>
            <li>
              <label for="grab">
                <input id="grab" name="shipping" type="radio"> Grab
              </label>
            </li>
          </ul>
        </div>
        <div class="checkout-payment">
          <h2> Payment </h2>
           <ul>
            <li>
              <label for="transfer">
                <input id="transfer" name="payment" type="radio"> Transfer
              </label>
            </li>
            <li>
              <label for="va">
                <input id="va" name="payment"  type="radio"> Virtual Account
              </label>
            </li>
            <li>
              <label for="cc">
                <input id="cc" name="payment"  type="radio"> Credit card
              </label>
            </li>
            <li>
              <label for="gopay">
                <input id="gopay" name="payment"  type="radio"> Gopay
              </label>
            </li>
          </ul>
        </div>
        <button @click="bayar()">Bayar</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
$orange: #f37021;
$white: #fff;

// layout
.checkout {
  margin: 0 auto;
  padding: 1em;
  width: 50%;
  ul {
    list-style-type: none;
    li {
      text-align: left;
    }
  }

  &-shipping {
    padding: 1em;
    margin: 1em;
    border: #ccc 1px solid;
    width: 100%;
    h2 {
      text-align: left;
      padding-left: 2em;
    }
  }

  &-payment {
    padding: 1em;
    margin: 1em;
    border: #ccc 1px solid;
    width: 100%;
    h2 {
      text-align: left;
      padding-left: 2em;
    }
  }

  button {
    padding: 1em;
    background: $orange;
    color: $white;
    border: none;
    font-size: 1em;
    font-weight: bold;
    width: 100px;
    cursor: pointer;
  }
}
</style>

<script>
export default {
  name: 'Checkout',
  methods: {
    bayar() {
      return this.$router.push('/thankyou')
      
    }
  }
}
</script>