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
        <div class="detail-title">한국화재보험협회, 일반보험플랫폼 BRIDGE</div>
        <div class="detail-sub-title">web & Mobile Platform</div>
        </div>
      </template>
    </q-parallax>
    <q-page-container class="page-container">
      <q-page class="container">
        <article class="">
          <q-intersection
            v-for="index in 1"
            :key="index"
            transition="scale"
            once
          >
          <div class="main_img">
                <img src="~src/img/bridge_page_0.svg" class="page-img"/>
              </div>
          <!-- <div class="summary-container">
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
            <p class="summary-text">화재보험협회 데이터 및 다양한 공공데이터를 결합한 통합위험관리 플랫폼 구축</p>
            <p></p>
          </div>
          </div> -->
        </q-intersection>
        </article>
        <article>
          <q-intersection
            v-for="page1 in 1"
            :key="page1"
            transition="scale"
            once
          >
              <div class="main_img">
                <img src="~src/img/bridge_page_1.png" class="page-img"/>
              </div>
          </q-intersection>
        </article>
        <article>
          <q-intersection
            v-for="page2 in 1"
            :key="page2"
            transition="scale"
            once
          >
              <div class="main_img">
                <img src="~src/img/bridge_page_2.svg" class="page-img"/>
              </div>
          </q-intersection>
        </article>
        <article>
          <q-intersection
            v-for="page3 in 1"
            :key="page3"
            transition="scale"
            once
          >
              <div class="main_img">
                <img src="~src/img/bridge_page_3.png" class="page-img"/>
              </div>
          </q-intersection>
        </article>
        <article>
          <q-intersection
            v-for="page4 in 1"
            :key="page4"
            transition="scale"
            once
          >
              <div class="main_img">
                <img src="~src/img/bridge_page_4.png" class="page-img"/>
              </div>
          </q-intersection>
          <q-intersection
            v-for="page5 in 1"
            :key="page5"
            transition="scale"
            once
          >
              <div class="main_img">
                <img src="~src/img/bridge_page_5.png" class="page-img"/>
              </div>
          </q-intersection>
        </article>
        <article class="final-article">
          <q-intersection
            v-for="page6 in 1"
            :key="page6"
            transition="scale"
            once
          >
            <div class="contact-btn">
              <div class="btn-wrap">
                <button class="btn" @click="morePortfolio"><i class="fa-solid fa-plus"></i><span class="btn-text">more portfolio</span></button>
              </div>
              <div class="btn-wrap">
                <button class="btn btn_border" @click="goList"><i class="fa-solid fa-arrow-left"></i><span class="btn-text">list</span></button>
              </div>
            </div>
          </q-intersection>
        </article>
      </q-page>


    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";

const $router = useRouter();


defineOptions({
  name: 'ProjectDetail',
});



const goList = () => {
  $router.push({
    path: `/project/ProjectInfo`,
  });
}

const morePortfolio = () => {
  window.open("https://yunjiyeon.github.io/portfolio/")
}

</script>
<style lang="scss" scoped>

.container {
  padding: 0;
}
.main_m_img {
  width: 320px;
  margin: 0 auto;
}
.page-img{
  width: 100%;
  vertical-align: bottom;
}
.final-article {
  background-color: #08487D;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  text-align: center;
  font-size: 48px;
  font-weight: 900;
  line-height: 1;
  color: #ffffff;
  text-shadow: 3px 4px 5px rgba(90, 90, 90, 0.2);
  display: flex;
  position: relative;
  z-index: 100;
  justify-content: center;
  transition: all 0.3s ease-in-out;
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

.summary-text {
  font-size: 24px;
}
.contact-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}
.btn {
  background-color: #ffffff;
  border: 1px solid #08487D;
  color: #08487D;
  font-weight: 900;
  // background: transparent;
  width: 100%;
  min-width: 200px;
  padding:  16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  .btn-text {
    padding-left: 8px;
  }
}
.btn_border {
  background-color: transparent;
  border: 1px solid #ffffff;
  color: #ffffff;
}
.btn:hover {
  background-color: transparent;
  border: 1px solid #ffffff;
  color: #ffffff;
}


@media (max-width: 1024px) {
  .q-parallax {
    height: 300px !important;
  }
  .detail-title {
    font-size: 24px;
  }
  .detail-sub-title {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .final-article {
    height: 120px;
  }
  .contact-btn {
    gap: 8px;
  }
  .btn {
    min-width: 130px;
    padding: 8px;
    .btn-text {
      font-size: 12px;
    }
  }
}

@media (max-width: 468px) {
  .q-parallax {
    height: 160px !important;
  }
  .detail-title {
    font-size: 18px;
  }
  .detail-sub-title {
    font-size: 12px;
  }
}
</style>
