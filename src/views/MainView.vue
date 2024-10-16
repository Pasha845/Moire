<template>
  <main class="content container">
    <div class="content__top">
      <div class="content__row">
        <h1 class="content__title">
          Каталог
        </h1>
        <span class="content__info" v-if="listLenght == 0">товаров нет</span>
        <span class="content__info" v-else-if="listLenght == 1">{{ listLenght }} товар</span>
        <span class="content__info" v-else-if="listLenght <= 4">{{ listLenght }} товара</span>
        <span class="content__info" v-else>{{ listLenght }} товаров</span>
      </div>
    </div>
    <div class="content__catalog">

      <ProductFilter />
      
      <section class="catalog">
        <div class="catalog__list">
          <ProductCard
            v-for="subject in subjects.items"
            :key="subject.id"
            :subject="subject"
          />
        </div>

        <!--<BasePagination v-model="page" :count="countProducts" :per-page="productsPerPage" />-->
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { getSubjects } from "../api/product";
  import type { ISubjects } from '../types/product';
  import ProductFilter from "@/components/ProductFilter.vue"
  import ProductCard from "@/components/ProductCard.vue";
  const subjects = ref<ISubjects[]>([]);

  const listLenght = ref();

  const loadSubjects = async () => {
    subjects.value = await getSubjects();
    listLenght.value = subjects.value.items.length;
  };

  loadSubjects();
</script>