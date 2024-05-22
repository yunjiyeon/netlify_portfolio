<template>
  <q-layout view="lHh Lpr lFf" class="container">
    <q-page-container>
      <!-- <q-page>
        <div>
          <img src="~src/img/main_img.jpg" class="main-img" />
          <div>
            <p class="main-text">YUN JI YEON<br>PORTFOLIO</p>
          </div>
        </div>
      </q-page> -->
      <q-page>
        <div>
          <ul>
          <li class="menu-item" @click="movePage('자기소개')">
            <p class="mene-title">About Me</p>
            <p class="menu-title-ko">자기소개</p>
          </li>
          <div class="d-flex jcsb aic">
            <li class="menu-item half-item" @click="movePage('경력/스킬')">
              <p class="mene-title">Carrer/Skills</p>
              <p class="menu-title-ko">경력/스킬</p>
            </li>
            <li class="menu-item half-item" >
              <p class="mene-title">Project</p>
              <p class="menu-title-ko">프로젝트 소개</p>
            </li>
          </div>
          <li class="menu-item" >
            <p class="mene-title">Project WebSite</p>
            <p class="menu-title-ko">프로젝트 'BRIDGE' 웹사이트 바로가기</p>
          </li>
        </ul>
        </div>
      </q-page>
    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const $router = useRouter();

const movePage = (name) => {
  if(name == '자기소개') {
    $router.push({
      path: `/about/AboutMe`,
    });
  } else if (name == '경력/스킬'){
    $router.push({
      path: `/skills/CarrerSkills`,
    });
  } else if (name == '프로젝트 소개') {

  } else {

  }
}

const moveMain = () => {
  $router.push({
    path: `/`,
  });
}

</script>
