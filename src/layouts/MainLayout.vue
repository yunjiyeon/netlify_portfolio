<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title class="logo-text" @click="moveMain">
          YUN
        </q-toolbar-title>

        <div>ⓒ Copyright 2024</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          YUNJIYEON PORTFOLIO
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <div>
        <router-view />
      </div>
    </q-page-container>


    <q-footer class="main-footer">
      <div class="footer-container d-flex jcsb aic">

        <div class="d-flex g20 aic">
          <div class="footer-icon">
            <img src="~src/img/미모티콘1.png">
          </div>
          <div>
            <p class="footer-title">윤지연 포트폴리오</p>
            <p class="footer-message">Hope to work Together!</p>
          </div>
        </div>
        <div>
          <button class="contact-btn btn btn-jelly">Contact</button>
        </div>
      </div>
    </q-footer>
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
    title: '자기소개',
    caption: 'About Me',
    icon: 'favorite',
  },
  {
    title: '경력/스킬',
    caption:'Carrer/Skills',
    icon: 'brush',
  },
  {
    title: '프로젝트 소개',
    caption: 'Project',
    icon: 'record_voice_over',
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
