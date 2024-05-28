<template>
  <q-layout>
    <q-page-container  class="container ">
      <q-page>
        <div class="about-content-box">
          <div class="about-box img-layout">
            <div class="img-box">
              <img src="~src/img/me.png">
            </div>
          </div>
          <div class="about-box">
            <div class="title">About Me</div>
            <ul class="about-item-box">
              <li class="about-item">
                <p class="item-title">이름</p>
                <p class="item-content">윤지연</p>
              </li>
              <li class="about-item">
                <p class="item-title">생년월일</p>
                <p class="item-content">1993.01.27 (나이: 31세)</p>
              </li>
              <li class="about-item">
                <p class="item-title">연락처</p>
                <p class="item-content">010-4214-4265</p>
              </li>
              <li class="about-item">
                <p class="item-title">이메일</p>
                <p class="item-content">yesyun93@gmail.com</p>
              </li>
            </ul>
            <ul class="keyword-box">
              <li class="keyword-item"># 협업</li>
              <li class="keyword-item"># 열정</li>
              <li class="keyword-item"># 소통</li>
              <li class="keyword-item"># 경험</li>
              <li class="keyword-item"># 기술</li>
              <li class="keyword-item"># 발전</li>
            </ul>
            <div class="text-content">
              저는 끊임없이 새로운 기술을 습득하고 발전해 나가는 것에 즐거움을 느끼며, 협업을 통해 함께 더 큰 가치를 창출해 나가는 것을 중요하게 생각합니다.<br>다양한 경험을 통해 웹개발 분야에서 성장하고자 하는 열정을 가지고 있습니다.<br>웹개발자로서의 역량과 경험을 살려, 더 나은 사용자 경험과 기술 혁신을 위해 최선을 다할 것입니다.<br>항상 소통의 중요성을 생각하며, 함께 성장하는 개발자가 되겠습니다.
            </div>
            <div class="text-content">
              <p class="about-title">✔️ 반응형 웹 사이트 프론트엔드 담당 경험</p>
              프론트엔드 개발자로서 보여지는 디자인 뿐 아니라 사용자 경험이 뛰어난 인터페이스를 개발하기 위해 고객사와 끈임없이 소통하며 보다 혁신적이고 새로운 서비스를 개발하려고 노력해 왔습니다. 또한, 웹 사이트 개발 외에 React Native 를 공부해 가며 애플리케이션 퍼블리싱을 진행한 경험이 있습니다.
            </div>
            <!-- <ul class="keyword-box">
              <li class="keyword-item"># 여행</li>
              <li class="keyword-item"># 전시회</li>
              <li class="keyword-item"># 연극</li>
              <li class="keyword-item"># 영화</li>
              <li class="keyword-item"># 산책</li>
              <li class="keyword-item"># 독서</li>
            </ul>
            <div class="text-content">
              저는 여행을 가거나 전시회나 연극, 영화를 보는 것을 좋아합니다.<br>
              이러한 취미들은 생각의 전환을 통해 많은 아이디어를 떠오를 수 있습니다.<br>
              걷는 것과 생각하는 것을 좋아해서 산책은 매일 하는 편입니다.<br>
              독서는 6분 독서법으로 점차 독서 시간을 늘리는 습관을 들이고 있습니다.
            </div> -->
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'AboutMe',

});


</script>
