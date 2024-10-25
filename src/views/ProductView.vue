<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" to="/">Каталог</router-link>
        </li>
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" to="">{{ product.category.title }}</router-link>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">{{ product.title }}</a>
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
            <router-link class="pics__link" v-for="num in photo.gallery" :key="num.photoId" to="">
              <img width="98" height="98" :src="num.file.url" :alt="product.title">
            </router-link>
          </li>
        </ul>
      </div>

      <div class="item__info">
        <span class="item__code">Артикул: {{ product.id }}</span>
        <h2 class="item__title">{{ product.title }}</h2>
        <div class="item__form">
          <form class="form" action="#" method="POST">
            <div class="item__row item__row--center">
              <div class="form__counter">
                <button type="button" @click="minusProduct" aria-label="Убрать один товар" :disabled="productAmount <= 1">
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>

                <input type="text" v-model.number="productAmount">

                <button type="button" @click="plusProduct" aria-label="Добавить один товар">
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
              </div>
              <b class="item__price">{{ product.price * productAmount | numberFormat }} ₽</b>
            </div>

            <div class="item__row">
              <fieldset class="form__block">
                <legend class="form__legend">Цвет</legend>
                <ul class="colors colors--black">
                  <li class="colors__item" v-for="(color, index) in product.colors" :key="index">
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
                    <option v-for="size in product.sizes" :key="size.id">{{ size.title }}</option>
                  </select>
                </label>
              </fieldset>
            </div>

            <button class="item__button button button--primery" type="submit">
              В корзину
            </button>
          </form>
        </div>
      </div>

      <div class="item__desc">
        <ul class="tabs">
          <li class="tabs__item">
            <a class="tabs__link tabs__link--current">Информация о товаре</a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#">Доставка и возврат</a>
          </li>
        </ul>
        <div class="item__content">
          <h3>Состав:</h3>
          <div v-for="material in product.materials" :key="material.id">
            <span>{{ material.title }}</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { getProduct } from "../api/product";
  import type { IProduct } from '../types/product';
  import numberFormat from "@/helpers/numberFormat";
  
  const product = ref<IProduct[]>([]);

  const loadProduct = async () => {
    product.value = await getProduct();
  };

  const selectPhoto = ref('');
  const productAmount = ref(1);

  const minusProduct = () => {
    productAmount.value--;
  };

  const plusProduct = () => {
    productAmount.value++;
  };

  loadProduct();
</script>