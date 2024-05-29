<template>
  <q-layout>
    <q-page-container class="page-container">
      <div class="top-box">
        <div class="sub-title mb16">프로젝트 소개</div>
        <div class="title">Project</div>
      </div>
      <div class="container">
        <div class="page-box">
          <article>
            <div class="total-count">총 <strong>1</strong> 개</div>
            <ul class="project-box">
              <li class="project-list" @click="openVisible" >
                <p class="project-title">한국화재보험협회 일반보험플랫폼 "BRIDGE" 개발</p>
                <p class="project-content">화재보험협회가 모아온 데이터를 바탕으로 현장정보, 전문지식 데이터 및 다양한 공공데이터를 결합하여 한국사회 전반에 기여할 수 있는 통합위험관리 플랫폼</p>
                <div class="open" :class="{open_active: openItem}">
                  <ul>
                    <li class="project-item">
                      <p class="item-title">프로젝트명</p>
                      <p class="item-content">BRIDGE</p>
                    </li>
                    <li class="project-item">
                      <p class="item-title">개발 인원</p>
                      <p class="item-content">5명</p>
                    </li>
                    <li class="project-item">
                      <p class="item-title">기간</p>
                      <p class="item-content">2023. 03. ~ 2024. 03. (12개월)</p>
                    </li>
                    <li class="project-item">
                      <p class="item-title">담당 역할</p>
                      <p class="item-content">퍼블리싱, 프론트엔드 개발</p>
                    </li>
                    <li class="project-item">
                      <p class="item-title">주요 업무</p>
                      <ol>
                        <li class="item-content">고객사 요구 사항 정의 및 관련 커뮤니케이션 실무</li>
                        <li class="item-content">요구 사항 확인 후 퍼블리싱, 프론트엔드 개발</li>
                        <li class="item-content">Figma 를 활용한 디자인 작업</li>
                        <li class="item-content">디버깅 진행</li>
                      </ol>
                    </li>
                    <li class="project-item">
                      <p class="item-title">주요 성과</p>
                      <p class="item-content">브릿지 웹 서비스 제공, 커뮤니케이션 능력 강화</p>
                    </li>
                    <li class="project-item">
                      <p class="item-title">사용 스킬</p>
                      <p class="item-content">
                        <span class="tag">Vue.js</span>
                        <span class="tag">HTML5</span>
                        <span class="tag">CSS3</span>
                        <span class="tag">JavaScript</span>
                        <span class="tag">Scss</span>
                        <span class="tag">Quasar</span>
                      </p>
                    </li>
                    <li class="more-btn-wrap">
                      <button class="more-btn" @click.stop="moreBtn">more >></button>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </q-page-container>
    <!-- <ProjectDetail v-if="detailVisible" @event="goList"/> -->
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
// import ProjectDetail from './ProjectDetail.vue'

const $router = useRouter();

defineOptions({
  name: 'ProjectPage',

});


const moreBtn = (event) => {
  $router.push({
    path: `/project/ProjectDetail`,
  });
}

const openItem = ref(false);
const openVisible = () => {
  openItem.value = !openItem.value;
}



</script>
<style lang="scss" scoped>
.q-layout {
  min-height: auto !important;
}
.container {
  background-color: #ffffff;
}

.q-list--bordered {
  border-top: 1px solid #121212;
  border-bottom: 1px solid #121212;
  border-left: none;
  border-right: none;
  border-radius: 0;
}

.open {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  .item-title {
    font-size: 14px;
    font-weight: 600;
  }
  .item-content {
    font-size: 14px;
  }
}
.open_active {
  max-height: 700px;
  transition: max-height 0.3s ease-in-out;
}

.project-item {
  display: flex;
  padding: 8px 0;
  align-items: center;
}

.item-title {
  min-width: 130px;
}

ol {
  padding: 0 18px;
}

.tag {
  background-color: var(--main-color);
  color: #ffffff;
  padding: 4px 16px;
  border-radius: 50px;
  text-align: center;
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 4px;
}

.more-btn-wrap {
  display: flex;
  justify-content: flex-end;
  .more-btn {
    // width: 120px;
    padding: 6px 20px;
    background: transparent;
    border: none;
    font-weight: 900;
    font-size: 16px;
    cursor: pointer;
  }
  :hover {
    color: var(--main-color);
  }
}


@media (max-width: 768px) {
  .project-item {
    flex-direction: column;
    align-items: flex-start;
    .item-title {
      padding-bottom: 4px;
    }
  }
}

@media (max-width: 468px) {
  .project-title {
    font-size: 16px;
    font-weight: 700;
  }
  .project-content {
    font-size: 14px;
  }
  .page-box {
    padding: 10px;
  }
  .project-list {
    padding: 20px;
  }
  .more-btn-wrap .more-btn {
    font-size: 14px;
  }
  .project-item {
    flex-direction: column;
    align-items: flex-start;
    .item-title {
      font-size: 12px;
      padding-bottom: 8px;
    }
    .item-content {
      font-size: 12px;
    }
    .tag {
      font-size: 10px;
    }
  }
}

</style>
