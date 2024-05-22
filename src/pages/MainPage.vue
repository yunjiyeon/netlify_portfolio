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
          <li class="menu-item" @click="moveAboutMe">
            <p class="mene-title">About Me</p>
            <p class="mene-sub-title">자기소개</p>
          </li>
          <div class="d-flex jcsb aic">
            <li class="menu-item half-item" >
              <p class="mene-title">Skills</p>
              <p class="mene-sub-title">스킬</p>
            </li>
            <li class="menu-item half-item" >
              <p class="mene-title">Project</p>
              <p class="mene-sub-title">프로젝트 소개</p>
            </li>
          </div>
          <li class="menu-item" >
            <p class="mene-title">Project WebSite</p>
            <p class="mene-sub-title">프로젝트 'BRIDGE' 웹사이트 바로가기</p>
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

const linksList = [
  {
    title: '소개',
    caption: 'About Me',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  },
  {
    title: '디자인',
    caption: 'BRIDGE Design',
    icon: 'brush',
    link: 'https://quasar.dev'
  },
  {
    title: '경험',
    caption: 'Communication',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: '브릿지 바로가기',
    caption: 'BRIDGE WebSite',
    icon: 'touch_app',
    link: 'https://bridge.kfpa.or.kr/#/'
  },
  {
    title: '연락처',
    caption: 'Contact Me!',
    icon: 'smartphone',
    link: 'https://awesome.quasar.dev'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const moveAboutMe = () => {
  $router.push({
    path: `/about/AboutMe`,
  });
}

const moveMain = () => {
  $router.push({
    path: `/`,
  });
}

</script>
