<template>
  <q-layout>
    <q-parallax>
      <template v-slot:media>
        <img src="~src/img/detail_img.png" />
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
            top: (scope.percentScrolled * 60) + '%',
            left: 0,
            right: 0
          }"
        >
        <div class="detail-title">한국화재보험협회, 일반보험 플랫폼 BRIDGE</div>
        <div class="detail-sub-title">web & Mobile Platform</div>
        </div>
      </template>
    </q-parallax>


    <q-page-container class="page-container">
      <!-- <div class="top-box">
        <div class="detail-title">한국화재보험협회, 일반보험 플랫폼 BRIDGE</div>
        <div class="detail-sub-title">web & Mobile Platform</div>
        <div>
          <button @click="goList">목록</button>
        </div>
      </div> -->
      <q-page class="container">
        <article class="detail-article summary">
          <q-intersection
            v-for="index in 1"
            :key="index"
            transition="scale"
          >
          <div class="summary-container">
            <div>
            <div class="summary-box">
              <p class="summary-title">Client</p>
              <p>한국화재보험협회</p>
            </div>
            <div class="summary-box">
              <p class="summary-title">Project Name</p>
              <p>Bridge</p>
            </div>
            <div class="summary-box">
              <p class="summary-title">Duration</p>
              <p>2023.03 ~ 2024.03 (12개월)</p>
            </div>
          </div>
          <div>
            <div class="summary-box">
              <p class="summary-title">Open</p>
              <p>2023.05</p>
            </div>
            <div class="summary-box">
              <p class="summary-title">Role</p>
              <p>Pubilshing</p>
              <p>Frontend Develop</p>
            </div>
          </div>
          <div class="summary-box">
            화재보험협회가 모아온 데이터를 바탕으로 현장정보, 전문지식 데이터 및 다양한 공공데이터를 결합하여 한국사회 전반에 기여할 수 있는 통합위험관리 플랫폼
          </div>
          </div>
        </q-intersection>
        </article>
        <article class="detail-article">
          <q-intersection
            v-for="index in 1"
            :key="index"
            transition="scale"
          >
              <div class="main_img">
                <img src="~src/img/bridge_main.png"/>
              </div>


          </q-intersection>


        </article>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';


defineOptions({
  name: 'ProjectDetail',

});


/*-----------------------------------------------------------------------------
                          props, emit 선언
  -----------------------------------------------------------------------------*/
  const emit = defineEmits(["event"]);



  const goList = () => {
    emit("event");
  }

</script>
<style lang="scss" scoped>

.container {
  padding: 0;
}

.main_img {
  width: 80%;
  margin: 0 auto;
  img {
    width: 100%;
    border-radius: 10px;
    border: 8px solid #121212;
    // border: 1px solid #999999;
    // box-shadow: 4px 4px 60px rgba(90, 90, 90, 0.2);
  }
}

.background-img {
    width: 100%;
    height: 500px;
    background: url(../img/bridge_main_img.jpg) no-repeat center;
    background-size: cover;
    opacity: 1;
}

.top-box {
  background-color: transparent;
  // border: 3px solid red;
  position: absolute;
  z-index: 100;
  top: 15%;
  width: 100%;
  // border: 1px solid red;
  margin-top: 0;
}
.detail-title {
  font-size: 48px;
  font-weight: 900;
  line-height: 1;
  color: #ffffff;
  text-shadow: 3px 4px 5px rgba(90, 90, 90, 0.2);
  display: flex;
  position: relative;
  z-index: 100;
  justify-content: center;
}
.detail-sub-title {
  line-height: 3;
  text-align: center;
  font-size: 16px;
  color: #ffffff;
  text-shadow: 3px 4px 5px rgba(90, 90, 90, 0.2);
}

.detail-article {
  padding: 80px 50px;
}
.summary-container {
  display: flex;
}
.summary {
  display: flex;
  gap: 42px;
  background-color: #ffffff;
  .summary-box {
    // border: 1px solid red;
    padding: 10px 20px;
    min-width: 240px;
    // border: 1px solid;
  }
  .summary-title {
    font-weight: 600;
    line-height: 2;
  }
}

.dd {
  // width: 100%;
  // object-fit: cover;
}
</style>
