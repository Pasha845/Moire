<template>
  <li class="catalog__item">
    <router-link class="catalog__pic" :to="{name: 'product', params: {id: product.id}}" v-for="(photo, index) in product.colors" :key="index">
      <div v-if="index == selectPhoto">
        <div v-for="num in photo.gallery" :key="num.photoId">
          <img :src="num.file.url" :alt="product.title">
        </div>
      </div>
    </router-link>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>

    <span class="catalog__price">
      {{ product.price | numberFormat }} ₽
    </span>
    
    <ul class="colors colors--black">
      <li class="colors__item" v-for="(color, index) in product.colors" v-bind:key="index">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" v-model="selectPhoto" :value="index">
          <span class="colors__value" :style="{ background: color.color.code }"></span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
  import gotoPage from "@/helpers/gotoPage";
  import numberFormat from "@/helpers/numberFormat";

  export default {
    data() {
      return {
        selectPhoto: ''
      };
    },
    filters: {
      numberFormat
    },
    methods: {
      gotoPage
    },
    props: ['product']
  };
</script>