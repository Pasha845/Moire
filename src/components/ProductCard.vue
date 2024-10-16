<template>
  <li class="catalog__item">
    <router-link class="catalog__pic" :to="'/product/' + subject.id" v-for="(photo, index) in subject.colors" :key="index">
      <div v-if="index == selectPhoto">
        <div v-for="num in photo.gallery" :key="num.photoId">
          <img :src="num.file.url" :alt="subject.title">
        </div>
      </div>
    </router-link>
    <h3 class="catalog__title"><a href="#">{{ subject.title }}</a></h3>
    <span class="catalog__price">{{ subject.price }} ₽</span>
    <ul class="colors colors--black">
      <li class="colors__item" v-for="(color, index) in subject.colors" :key="index">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" v-model="selectPhoto" :value="index">
          <span class="colors__value" :style="{ background: color.color.code }"></span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import type { ISubjects } from "../types/product";

  defineProps<{ subject: ISubjects }>();

  const selectPhoto = ref('');
</script>