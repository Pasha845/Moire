<template>
  <aside class="filter">
    <form class="filter__form form" @submit.prevent="submit">
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
            <option v-bind:value="category.id" v-for="category in categories.items" :key="category.id">{{ category.title }}</option>
          </select>
        </label>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Цвет</legend>
        <ul class="colors">
          <li class="colors__item" v-for="(color, index) in colors.items" v-bind:key="index">
            <label class="colors__label">
              <input class="colors__radio sr-only" type="radio" name="color-item" v-model="currentColorId" :value="index">
              <span class="colors__value" :style="{ background: color.code }"></span>
            </label>
          </li>
        </ul>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Материал</legend>
        <ul class="check-list">
          <li class="check-list__item" v-for="(material, index) in materials.items" :key="index">
            <label class="check-list__label">
              <input class="check-list__check sr-only" type="checkbox" name="material" v-model="currentMaterialId" :value="index">
              <span class="check-list__desc">
                {{ material.title }}
                <span>({{ material.productsCount }})</span>
              </span>
            </label>
          </li>
        </ul>
      </fieldset>

      <fieldset class="form__block">
        <legend class="form__legend">Коллекция</legend>
        <ul class="check-list">
          <li class="check-list__item" v-for="(season, index) in seasons.items" v-bind:key="index">
            <label class="check-list__label">
              <input class="check-list__check sr-only" type="checkbox" name="collection" v-model="currentSeasonId" :value="index">
              <span class="check-list__desc">
                {{ season.title }}
                <span>({{ season.productsCount }})</span>
              </span>
            </label>
          </li>
        </ul>
      </fieldset>

      <button class="filter__submit button button--primery" type="submit">
        Применить
      </button>
      <button class="filter__reset button button--second" @click.prevent="reset">
        Сбросить
      </button>
    </form>
  </aside>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { getCategories, getColors, getMaterials, getSeasons } from "../api/product";
  import type { ICategories, IColors, IMaterials, ISeasons } from '../types/product';
  const categories = ref<ICategories[]>([]);
  const colors = ref<IColors[]>([]);
  const materials = ref<IMaterials[]>([]);
  const seasons = ref<ISeasons[]>([]);

  const currentPriceFrom = ref(0);
  const currentPriceTo = ref(0);
  const currentCategoryId = ref(0);
  const currentColorId = ref(0);
  const currentMaterialId = ref(0);
  const currentSeasonId = ref(0);

  const loadCategories = async () => {
    categories.value = await getCategories();
  };

  const loadColors = async () => {
    colors.value = await getColors();
  };

  const loadMaterials = async () => {
    materials.value = await getMaterials();
  };

  const loadSeasons = async () => {
    seasons.value = await getSeasons();
  };

  const submit = () => {

  };

  const reset = () => {
    currentPriceFrom.value = 0;
    currentPriceTo.value = 0;
    currentCategoryId.value = 0;
    currentColorId.value = 0;
    currentMaterialId.value = 0;
    currentSeasonId.value = 0;
  };

  loadCategories();
  loadColors();
  loadMaterials();
  loadSeasons();
</script>