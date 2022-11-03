<template>
  <aside class="filter">
    <form class="filter__form form" action="#" method="get" @submit.prevent="submit">
      <fieldset class="form__block">
      <legend class="form__legend">Цена</legend>
      <label class="form__label form__label--price">
        <input class="form__input" type="text" name="min-price" v-model.number="currentPriceFrom">
        <span class="form__value">От</span>
      </label>
      <label class="form__label form__label--price">
        <input class="form__input" type="text" name="max-price" v-model.number="currentPriceTo">
        <span class="form__value">До</span>
      </label>
      </fieldset>

      <fieldset class="form__block">
      <legend class="form__legend">Категория</legend>
      <label class="form__label form__label--select">
        <select class="form__select" type="text" name="category" v-model.number="currentCategoryId">
          <option value="0">Все категории</option>
          <option v-bind:value="category.id" v-for="category in categories" :key="category.id">{{ category.title }}</option>
        </select>
      </label>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Материал</legend>
        <ul class="check-list">          
          <li class="check-list__item">
            <label class="check-list__label">
              <input class="check-list__check sr-only" type="checkbox" name="material" value="лен">
              <span class="check-list__desc">
                лен 
                <span>(3)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input class="check-list__check sr-only" type="checkbox" name="material" value="хлопок">
              <span class="check-list__desc">
                хлопок 
                <span>(46)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input class="check-list__check sr-only" type="checkbox" name="material" value="шерсть">
              <span class="check-list__desc">
                шерсть 
                <span>(20)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input class="check-list__check sr-only" type="checkbox" name="material" value="шелк">
              <span class="check-list__desc">
                шелк 
                <span>(30)</span>
              </span>
            </label>
          </li>
        </ul>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Коллекция</legend>
        <ul class="check-list">
          <li class="check-list__item">
            <label class="check-list__label">
              <input class="check-list__check sr-only" type="checkbox" name="collection" value="лето" checked="">
              <span class="check-list__desc">
                лето 
                <span>(2)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input class="check-list__check sr-only" type="checkbox" name="collection" value="зима">
              <span class="check-list__desc">
                зима 
                <span>(53)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input class="check-list__check sr-only" type="checkbox" name="collection" value="весна">
              <span class="check-list__desc">
                весна 
                <span>(24)</span>
              </span>
            </label>
          </li>
          <li class="check-list__item">
            <label class="check-list__label">
              <input class="check-list__check sr-only" type="checkbox" name="collection" value="осень">
              <span class="check-list__desc">
                осень 
                <span>(30)</span>
              </span>
            </label>
          </li>
        </ul>
      </fieldset>

      <button class="filter__submit button button--primery" type="submit">
        Применить
      </button>
      <button class="filter__reset button button--second" type="button" @click.prevent="reset">
        Сбросить
      </button>
    </form>
  </aside>
</template>

<script>
  import axios from 'axios';
  import {API_BASE_URL} from '../config';

  export default {
    data() {
      return {
        currentPriceFrom: 0,
        currentPriceTo: 0,
        currentCategoryId: 0,
        currentColorCheck: '',

        categoriesData: null
      }
    },
    props: ['priceFrom', 'priceTo', 'categoryId', 'colorCheck'],
    computed: {
      categories() {
        return this.categoriesData ? this.categoriesData.items : [];
      }
    },
    watch: {
      priceFrom(value) {
        this.currentPriceFrom = value;
      },
      priceTo(value) {
        this.currentPriceTo = value;
      },
      categoryId(value) {
        this.currentCategoryId = value;
      },
      colorCheck(value) {
        this.currentColorCheck = value;
      }
    },
    methods: {
      submit() {
        this.$emit('update:priceFrom', this.currentPriceFrom);
        this.$emit('update:priceTo', this.currentPriceTo);
        this.$emit('update:categoryId', this.currentCategoryId);
        this.$emit('update:colorCheck', this.currentColorCheck);
      },
      reset() {
        this.$emit('update:priceFrom', 0);
        this.$emit('update:priceTo', 0);
        this.$emit('update:categoryId', 0);
        this.$emit('update:colorCheck', 0);
      },
      loadCategories() {
        axios.get(API_BASE_URL + '/api/productCategories')
          .then(response => this.categoriesData = response.data);
      }
    },
    created() {
      this.loadCategories();
    }
  }
</script>