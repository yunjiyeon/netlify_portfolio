<template>
  <q-layout>
    <q-page-container class="container">
      <q-page>
        <article>
          <div class="content-title">Language</div>
          <ul class="skills-box">
            <li class="skills-item">JavaScript</li>
          </ul>
        </article>
        <article>
          <div class="content-title">Framework/Library</div>
          <ul class="skills-box">
            <li class="skills-item">Vue.js<br>
              <p class="more" @click="moreVisible('vue')">more</p>
              <div v-if="moreItem == 'vue'">
                <p class="more-content">Vue 3 를 사용하여 한국화재보험협회 일반 보험플랫폼 &lt;BRIDGE&gt; 를 개발한 경헙이 있습니다.
HTML,CSS, 자바스크립트 표준을 기반으로, 컴포넌트를 활용하여 효율적으로 개발할 수 있습니다.</p>
                <button class="detail-btn">portfolio 보러가기</button>
              </div>
            </li>
            <li class="skills-item">Quasar<br>
              <p class="more" @click="moreVisible('Quasar')">more</p>
              <p class="more-content" v-if="moreItem == 'Quasar'">객체 지향의 핵심 개념을 숙지하기 위해 노력하고 있으며, 그에 따른 논리적인 코드를 짜고자 합니다.
  ES6+ 문법을 활용한 웹/앱 사이트 개발 경험이 있습니다.</p>
            </li>
            <li class="skills-item">React<br>
              <p class="more" @click="moreVisible('React')">more</p>

              <div v-if="moreItem == 'React'">
                <p class="more-content">useState, useEffect 을 사용하고 React-Bootstrap 과 React-Router 라이브러리를 활용할 수 있습니다. React 컴포넌트 기반 홈페이지 &lt;FILA&gt;, &lt;AppleTV+&gt;를 개발한 경험이 있습니다.</p>
                <button class="detail-btn">portfolio 보러가기</button>
              </div>
            </li>
            <li class="skills-item">Bootstrap<br>
              <p class="more" @click="moreVisible('Bootstrap')">more</p>
              <div v-if="moreItem == 'Bootstrap'">
                <p class="more-content">Bootstrap을 통한 반응형 홈페이지 &lt;Seoul Music Festival&gt;, &lt;60s&gt; 를 개발하였습니다.</p>
                <button class="detail-btn">portfolio 보러가기</button>
              </div>
            </li>
            <li class="skills-item">jQuery</li>
          </ul>
        </article>
        <article>
          <div class="content-title">MarkUp</div>
          <ul class="skills-box">
            <li class="skills-item">Html5</li>
            <li class="skills-item">Css3</li>
            <li class="skills-item">Scss</li>
          </ul>
        </article>
        <article>
          <div class="content-title">Tool, and the like</div>
          <ul class="skills-box">
            <li class="skills-item">Git, Github</li>
            <li class="skills-item">Netlify</li>
            <li class="skills-item">PWA</li>
            <li class="skills-item">Figma</li>
            <li class="skills-item">Photoshop</li>
          </ul>
        </article>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'SkillsList',

});

const moreItem = ref([]);
const moreToggle = ref(false);
const moreVisible = (item) => {
  moreItem.value = item;
  moreToggle.value = !moreToggle.value;
}
</script>
