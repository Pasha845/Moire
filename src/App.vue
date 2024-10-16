<template>
  <div>
    <header class="header container">
      <div class="header__wrapper">
        <span class="header__info">Каталог</span>
        <a class="header__logo" href="#">
          <img src="/img/logo.svg" alt="Logo" width="116" height="34">
        </a>
        <a class="header__tel" href="tel:8 800 600 90 09">8 800 600 90 09</a>
        <!--<a href="#">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2239 3.09729C16.0203 5.89367 16.0203 10.4275 13.2239 13.2239C10.4275 16.0203 5.89367 16.0203 3.09729 13.2239C0.300904 10.4275 0.300904 5.89367 3.09729 3.09729C5.89367 0.300904 10.4275 0.300904 13.2239 3.09729ZM13.9524 13.9095C17.1179 10.7209 17.1107 5.56993 13.931 2.39018C10.7441 -0.796727 5.57709 -0.796727 2.39018 2.39018C-0.796727 5.57709 -0.796727 10.7441 2.39018 13.931C5.56993 17.1107 10.7209 17.1179 13.9095 13.9524L13.2096 14.6523L18.2587 19.7014C18.6571 20.0998 19.303 20.0998 19.7013 19.7014C20.0997 19.303 20.0997 18.6572 19.7013 18.2588L14.6522 13.2097L13.9524 13.9095Z" fill="black"/>
          </svg>
        </a>-->

        <CartIndicator />
        
      </div>
    </header>

    <router-view />

    <footer class="footer container">
      <div class="footer__wrapper">
        <ul class="footer__links">
          <li>
            <a class="footer__link" href="#">Каталог</a>
          </li>
          <li>
            <a class="footer__link" href="tel:88006009009">8 800 600 90 09</a>
          </li>
          <li>
            <a class="footer__link" href="mailto:hi@technozavrrr.com">hello@moire.com</a>
          </li>
          <li>
            <a class="footer__link" href="#">Распродажа</a>
          </li>
          <li>
            <a class="footer__link footer__link--medium" href="#">Заказать звонок</a>
          </li>
        </ul>

        <ul class="footer__social social">
          <li class="social__item">
            <a class="social__link" href="#" aria-label="Вконтакте">
              <svg width="20" height="11" fill="currentColor">
                <use xlink:href="#icon-vk"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a class="social__link" href="#" aria-label="Инстаграм">
              <svg width="17" height="17" fill="currentColor">
                <use xlink:href="#icon-insta"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a class="social__link" href="#" aria-label="Facebook">
              <svg width="17" height="17" fill="currentColor">
                <use xlink:href="#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a class="social__link" href="#" aria-label="Twitter">
              <svg width="17" height="14" fill="currentColor">
                <use xlink:href="#icon-twitter"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a class="social__link" href="#" aria-label="Telegram">
              <svg width="19" height="17" fill="currentColor">
                <use xlink:href="#icon-telegram"></use>
              </svg>
            </a>
          </li>
        </ul>

        <p class="footer__desc">
          Все права на&nbsp;материалы, находящиеся на&nbsp;сайте, охраняются в&nbsp;соответствии с&nbsp;законодательством&nbsp;РФ, 
          в&nbsp;том числе об&nbsp;авторском праве и&nbsp;смежных правах.
        </p>
        
        <ul class="footer__data">
          <li>
            <a class="footer__link" href="#" target="_blank" rel="noopener" type="application/pdf">Политика конфиденциальности</a>
          </li>
          <li>
            <a class="footer__link" href="#" target="_blank" rel="noopener" type="application/pdf">Публичная оферта</a>
          </li>
        </ul>

        <span class="footer__copyright">© 2024 Moire</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import CartIndicator from '@/components/CartIndicator.vue';
</script>
