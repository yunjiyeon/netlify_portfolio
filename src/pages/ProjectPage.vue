<template>
  <q-layout>
    <q-page-container class="page-container">
      <div class="top-box">
        <div class="sub-title mb16">프로젝트 소개</div>
        <div class="title">Project</div>
      </div>
      <q-page class="container">
        <div class="page-box">
          <article>
            <div class="total-count">총 <strong>1</strong> 개</div>
            <ul class="project-box">
              <li class="project-list" >
                <p class="project-title">한국화재보험협회 일반보험플랫폼 "BRIDGE" 개발</p>
                <p class="project-content">화재보험협회가 모아온 데이터를 바탕으로 현장정보, 전문지식 데이터 및 다양한 공공데이터를 결합하여 한국사회 전반에 기여할 수 있는 통합위험관리 플랫폼</p>
              </li>
            </ul>
          </article>
        </div>
      </q-page>


    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'ProjectPage',

});


</script>
<style lang="scss" scoped>

.container {
  background-color: #ffffff;
}
</style>
