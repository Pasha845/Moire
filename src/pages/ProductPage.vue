<template>
  <main class="content container" v-if="productLoading">
    <div class="loading">
      <div class="loading__title">Загрузка товаров...</div>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </main>
  <main class="content container" v-else-if="!productData">Не удалось загрузить товар</main>
  <main class="content container" v-else>
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{name: 'main'}">
            Каталог
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{name: 'main'}">
            {{ category.title }}
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">
            {{ product.title }}
          </a>
        </li>
      </ul>
    </div>

    <section class="item">
      <div class="item__pics pics">
        <div class="pics__wrapper">
          <router-link v-for="(photo, index) in product.colors" :key="index" :to="{name: 'product', params: {id: product.id}}">
            <div v-if="index == selectPhoto">
              <div v-for="num in photo.gallery" :key="num.photoId">
                <img width="570" height="570" :src="num.file.url" :alt="product.title">
              </div>
            </div>
          </router-link>
        </div>
        <ul class="pics__list">
          <li class="pics__item" v-for="(photo, index) in product.colors" :key="index">
            <router-link class="pics__link" v-for="num in photo.gallery" :key="num.photoId" :to="{name: 'product', params: {id: product.id}}">
              <img width="98" height="98" :src="num.file.url" :alt="product.title">
            </router-link>
          </li>
        </ul>
      </div>

      <div class="item__info">
        <span class="item__code">Артикул: {{ product.id }}</span>
        <h2 class="item__title">
          {{ product.title }}
        </h2>

        <div class="item__form">
          <form class="form" action="#" method="POST" @submit.prevent="addToCart">
            <div class="item__row item__row--center">
              <div class="form__counter">
                <button type="button" aria-label="Убрать один товар" :disabled="btnProduct" @click="minusProduct">
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>

                <input type="text" v-model.number="productAmount">

                <button type="button" aria-label="Добавить один товар" @click="plusProduct">
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
              </div>

              <b class="item__price">
                {{ product.price * productAmount | numberFormat }} ₽
              </b>
            </div>

            <div class="item__row">
              <fieldset class="form__block">
                <legend class="form__legend">Цвет</legend>
                <ul class="colors colors--black">
                  <li class="colors__item" v-for="(color, index) in product.colors" v-bind:key="index">
                    <label class="colors__label">
                      <input class="colors__radio sr-only" type="radio" v-model="selectPhoto" :value="index">
                      <span class="colors__value" :style="{ background: color.color.code}"></span>
                    </label>
                  </li>
                </ul>
              </fieldset>

              <fieldset class="form__block">
                <legend class="form__legend">Размер</legend>
                <label class="form__label form__label--small form__label--select">
                  <select class="form__select" type="text" name="category">
                    <option v-bind:key="size.id" v-for="size in productData.sizes">{{ size.title }}</option>
                  </select>
                </label>
              </fieldset>
            </div>

            <button class="item__button button button--primery" type="submit" :disabled="productAddSending">
              В корзину
            </button>
            <div v-show="productAdded">Товар добавлен в корзину</div>
            <div v-show="productAddSending" class="loading">Добаляем товар в корзину...
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </form>
        </div>
      </div>

      <div class="item__desc">
        <ul class="tabs">
          <li class="tabs__item">
            <a class="tabs__link tabs__link--current">
              Информация о товаре
            </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#">
              Доставка и возврат
            </a>
          </li>
        </ul>

        <div class="item__content">
          <h3>Состав:</h3>
          
          <p>
            60% хлопок<br>
            30% полиэстер<br>
          </p>
        
          <h3>Уход:</h3>

          <p>
            Машинная стирка при макс. 30ºC короткий отжим<br>
            Гладить при макс. 110ºC<br>
            Не использовать машинную сушку<br>
            Отбеливать запрещено<br>
            Не подвергать химчистке<br>
          </p>
  
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import gotoPage from "@/helpers/gotoPage";
  import numberFormat from "@/helpers/numberFormat";
  import axios from 'axios';
  import {API_BASE_URL} from "../config";
  import { mapActions } from 'vuex';

  export default {
    data() {
      return {
        selectPhoto: '',
        selectColor: 1,
        productAmount: 1,
        productData: null,
        productLoading: false,
        productLoadingFailed: false,
        productAdded: false,
        productAddSending: false
      };
    },
    filters: {
      numberFormat
    },
    computed: {
      product() {
        return this.productData;
      },
      category() {
        return this.productData.category;
      },
      btnProduct(){
        return this.productAmount === 1 ? true : false;
      }
    },
    methods: {
      ...mapActions(['addProductToCart']),
      gotoPage,
      addToCart() {
        this.productAdded = false;
        this.productAddSending = true;
        this.addProductToCart({productId: this.product.id, colorId: 20, sizeId: 2, amount: this.productAmount})
          .then(() => {
            this.productAdded = true;
            this.productAddSending = false;
          });
      },
      minusProduct(){
        this.productAmount--;
      },
      plusProduct(){
        this.productAmount++;
      },
      loadProduct(){
        this.productLoading = true;
        this.productLoadingFailed = false;
        axios.get(API_BASE_URL + '/api/products/' + this.$route.params.id)
          .then(response => this.productData = response.data)
          .catch(() => this.productLoadingFailed = true)
          .then(() => this.productLoading = false);
      }
    },
    watch: {
      '$route.params.id': {
        handler(){
          this.loadProduct();
        },
        immediate: true
      }
    }
  }
</script>