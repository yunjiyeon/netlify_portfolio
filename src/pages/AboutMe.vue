<template>
  <q-layout>
    <q-page-container class="container page-container">
      <q-page class="flex flex-center">
      <div class="q-px-lg q-pb-md">
        <q-timeline :layout="layout" color="orange">
          <q-timeline-entry heading>
            <p class="title">About Me</p>
          </q-timeline-entry>

          <q-timeline-entry heading> <p class="sub-title">Career</p></q-timeline-entry>

          <q-timeline-entry
            title="(주)가이랩"
            subtitle="2023. 03. ~ 2024. 03. (12개월)"
            side="left"
            icon="code"
          >
            <div>
              한국화재보험협회 일반 보험 플랫폼<br>
              반응형 웹 사이트 프론트엔드 개발
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="(주)타이드스퀘어"
            subtitle="2014. 08. ~ 2022. 05. (7년 10개월)"
            side="left"
            icon="flight_takeoff"
          >
            <div>
              여행사 항공 예약/변경/담당 직무 수행
            </div>
          </q-timeline-entry>

          <q-timeline-entry heading> <p class="sub-title">Education</p></q-timeline-entry>

          <q-timeline-entry
            title="강남 그린 컴퓨터 아카데미"
            subtitle="2022. 07. ~ 2023. 01. (6개월)"
            side="right"
            icon="local_library"
          >
            <div>
              프로젝트기반 프론트엔드(React, Vue) 웹&앱 SW개발자 양성 과정 수료
            </div>
          </q-timeline-entry>

          <q-timeline-entry heading> <p class="sub-title">BirthDay</p></q-timeline-entry>

          <q-timeline-entry
            title="윤지연"
            subtitle="1993. 01. 27."
            side="left"
            icon="celebration"
          >
            <!-- <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div> -->
          </q-timeline-entry>

        </q-timeline>
      </div>
    </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
defineOptions({
  name: 'IndexPage',
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  }
});


</script>
