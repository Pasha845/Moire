<template>
  <router-link class="header__cart" aria-label="Корзина с товарами" :to="{name: 'cart'}">
    <img src="img/svg/icon-cart.svg" width="19" height="24">
    <span class="header__count" aria-label="Количество товаров">{{ $store.state.cartProducts.length }}</span> 
  </router-link>
</template>

<script>
  export default {}
</script>
