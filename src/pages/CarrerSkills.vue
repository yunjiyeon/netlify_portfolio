<template>
  <q-layout>
    <q-page-container class="page-container">
      <div class="top-box">
        <div class="sub-title mb16">경력 & 스킬</div>
        <div class="title">Carrer & Skills</div>
        <ul class="tab-list-box">
          <li class="tab-btn"
          @click="selectMenu('timeline')"
          :class="{active: selectItem == 'timeline'}">Timeline</li>
          <li class="tab-btn"
          @click="selectMenu('skills')"
          :class="{active: selectItem == 'skills'}">Skills</li>
          <li class="tab-btn"
          @click="selectMenu('license')"
          :class="{active: selectItem == 'license'}">License</li>
        </ul>
      </div>
      <q-page class="flex flex-center page-box" v-if="timelineVisible">
        <div class="q-px-lg q-pb-md">
          <q-timeline :layout="layout" color="orange">
            <q-timeline-entry heading>
              <p class="content-title">Timeline</p>
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
            </q-timeline-entry>

          </q-timeline>
        </div>
      </q-page>
      <q-page class="page-box" v-if="skillsVisible">
        <SkillsList />
      </q-page>
      <q-page class="page-box" v-if="licenseVisible">
        <LicenseList />
      </q-page>


    </q-page-container>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import LicenseList from './LicenseList.vue'
import SkillsList from './SkillsList.vue'

defineOptions({
  name: 'CarrerSkills',
  computed: {
    layout () {
      return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
    }
  }
});

/* 리스트 active css */
const selectItem = ref('timeline');

/* 컴포넌트 */
const timelineVisible = ref(true);
const licenseVisible = ref(false);
const skillsVisible = ref(false);

const selectMenu = (item) => {
  selectItem.value = item;
  if(item == 'timeline') {
    timelineVisible.value = true;
    licenseVisible.value = false;
    skillsVisible.value = false;
  } else if (item == 'skills') {
    timelineVisible.value = false;
    licenseVisible.value = false;
    skillsVisible.value = true;
  } else {
    timelineVisible.value = false;
    licenseVisible.value = true;
    skillsVisible.value = false;
  }
}



</script>
