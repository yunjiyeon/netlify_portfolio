<template>
  <q-layout>
    <q-page-container class="container">

      <q-page>
        <div class="d-flex jce" >
          <q-checkbox toggle-order="ft" v-model="orange" label="모두 펼치기" color="orange" @click="openMore"/>
        </div>

        <!-- <button class="detail-btn" @click="openMore">한 눈에 보기</button> -->
        <article>
          <div class="content-title">Language</div>
          <ul class="skills-box">
            <li class="skills-item">JavaScript<br>
              <p class="more" @click="moreVisible('JavaScript')">more</p>
              <div v-if="moreItem == 'JavaScript' || openAllMore">
                <p class="more-content">객체 지향의 핵심 개념을 숙지하기 위해 노력하고 있으며, 그에 따른 논리적인 코드를 짜고자 합니다.
ES6+ 문법을 활용한 웹/앱 사이트 개발 경험이 있습니다.</p>
              </div>
            </li>
          </ul>
        </article>
        <article>
          <div class="content-title">Framework/Library</div>
          <ul class="skills-box">
            <li class="skills-item">Vue.js<br>
              <p class="more" @click="moreVisible('vue')">more</p>
              <div v-if="moreItem == 'vue' || openAllMore">
                <p class="more-content">Vue 3 를 사용하여 한국화재보험협회 일반 보험플랫폼 &lt;BRIDGE&gt; 를 개발한 경헙이 있습니다.
HTML,CSS, 자바스크립트 표준을 기반으로, 컴포넌트를 활용하여 효율적으로 개발할 수 있습니다.</p>
                <!-- <button class="detail-btn">portfolio 보러가기</button> -->
              </div>
            </li>
            <li class="skills-item">Quasar<br>
              <!-- <p class="more" @click="moreVisible('Quasar')">more</p>
              <p class="more-content" v-if="moreItem == 'Quasar' || openAllMore">객체 지향의 핵심 개념을 숙지하기 위해 노력하고 있으며, 그에 따른 논리적인 코드를 짜고자 합니다.
  ES6+ 문법을 활용한 웹/앱 사이트 개발 경험이 있습니다.</p> -->
            </li>
            <li class="skills-item">React<br>
              <p class="more" @click="moreVisible('React')">more</p>

              <div v-if="moreItem == 'React' || openAllMore">
                <p class="more-content">useState, useEffect 을 사용하고 React-Bootstrap 과 React-Router 라이브러리를 활용할 수 있습니다. React 컴포넌트 기반 홈페이지 &lt;FILA&gt;, &lt;AppleTV+&gt;를 개발한 경험이 있습니다.</p>
                <!-- <button class="detail-btn">portfolio 보러가기</button> -->
              </div>
            </li>
            <li class="skills-item">Bootstrap<br>
              <p class="more" @click="moreVisible('Bootstrap')">more</p>
              <div v-if="moreItem == 'Bootstrap' || openAllMore">
                <p class="more-content">Bootstrap을 통한 반응형 홈페이지 &lt;Seoul Music Festival&gt;, &lt;60s&gt; 를 개발하였습니다.</p>
                <!-- <button class="detail-btn">portfolio 보러가기</button> -->
              </div>
            </li>
            <li class="skills-item">jQuery<br>
              <p class="more" @click="moreVisible('jQuery')">more</p>
              <div v-if="moreItem == 'jQuery' || openAllMore">
                <p class="more-content">자바스크립트를 보다 쉽게 활용하기 위하여 오픈소스 기반의 jQuery를 사용한 홈페이지를 구축할 수 있습니다.</p>
              </div>
              </li>
          </ul>
        </article>
        <article>
          <div class="content-title">MarkUp</div>
          <ul class="skills-box">
            <li class="skills-item">Html/CSS<br>
              <p class="more" @click="moreVisible('Html/CSS')">more</p>
              <div v-if="moreItem == 'Html/CSS' || openAllMore">
                <p class="more-content">프론트엔드의 기본 스킬인 HTML5 / CSS3 의 기초를 토대로 웹표준 및 웹접근성을 준수하여 웹페이지를 제작할 수 있으며, CSS를 활용한 애니메이션 구현을 할 수 있습니다.
반응형 웹 디자인의 기본인 mediaQuery를 활용하여 유연하게 콘텐츠를 배치할 수 있습니다.</p>
              </div>
            </li>
            <li class="skills-item">Scss<br>
              <p class="more" @click="moreVisible('Scss')">more</p>
              <div v-if="moreItem == 'Scss' || openAllMore">
                <p class="more-content">반복문과 조건문을 통한 스타일 효과를 효율적으로 적용할 수 있으며, 애니메이션을 활용한 동적인 효과를 구현할 수 있습니다.</p>
              </div>
            </li>
          </ul>
        </article>
        <article>
          <div class="content-title">Tool, and the like</div>
          <ul class="skills-box">
            <li class="skills-item">Git, Github<br>
              <p class="more" @click="moreVisible('Git')">more</p>
              <div v-if="moreItem == 'Git' || openAllMore">
                <p class="more-content">git을 통하여 소스 코드를 호스팅하고, 오픈 소스를 활용할 수 있습니다.
gitbash를 이용하여 보다 효율적으로 커밋, 푸시, 동기화를 할 수 있습니다.</p>
              </div>
            </li>
            <li class="skills-item">Netlify<br>
              <p class="more" @click="moreVisible('Netlify')">more</p>
              <div v-if="moreItem == 'Netlify' || openAllMore">
                <p class="more-content">웹 사이트의 유지 보수가 용이하도록 Netlify를 통한 사이트 배포를 할 수 있습니다.</p>
              </div>
            </li>
            <!-- <li class="skills-item">PWA<br>
              <p class="more" @click="moreVisible('Scss')">more</p>
              <div v-if="moreItem == 'Scss'">
                <p class="more-content">반복문과 조건문을 통한 스타일 효과를 효율적으로 적용할 수 있으며, 애니메이션을 활용한 동적인 효과를 구현할 수 있습니다.</p>
              </div>
            </li> -->
            <li class="skills-item">Figma<br>
              <p class="more" @click="moreVisible('Figma')">more</p>
              <div v-if="moreItem == 'Figma' || openAllMore">
                <p class="more-content">피그마를 활용하여 UI/UX 디자인과 프로토타입을 제작할 수 있습니다.</p>
              </div>
            </li>
            <!-- <li class="skills-item">Photoshop<br>
              <p class="more" @click="moreVisible('Scss')">more</p>
              <div v-if="moreItem == 'Scss'">
                <p class="more-content">반복문과 조건문을 통한 스타일 효과를 효율적으로 적용할 수 있으며, 애니메이션을 활용한 동적인 효과를 구현할 수 있습니다.</p>
              </div>
            </li> -->
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

const moreItem = ref('');
const moreToggle = ref(false);
const openAllMore = ref(false);
const moreVisible = (item) => {
  moreItem.value = item;
  moreToggle.value = !moreToggle.value;
}


const openMore = () => {
  moreItem.value = '';
  openAllMore.value = !openAllMore.value
}

const orange = ref(false);


</script>
