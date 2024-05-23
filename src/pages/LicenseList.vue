<template>
  <q-layout>
    <q-page-container class="container">
      <q-page>
        <article>
          <div class="content-title"></div>
          <ul class="skills-box">
            <li class="skills-item">정보처리기사<br>
              <div>
                <p class="more-content">
                  2023.03 필기 합격<br>
                </p>
                <p>
                  한국산업인력공단
                </p>
              </div>
            </li>
            <li class="skills-item">정보처리기능사<br>
              <div>
                <p class="more-content">
                  2022.06 필기 합격<br>
                </p>
                <p>
                  한국산업인력공단
                </p>
              </div>
            </li>
            <li class="skills-item">정보기기운용기능사<br>
              <div>
                <p class="more-content">
                  2010.07 최종 합격<br>
                </p>
                <p>
                  한국산업인력공단
                </p>
              </div>
            </li>
            <li class="skills-item">워드프로세서2급<br>
              <div>
                <p class="more-content">
                  2009.11 최종 합격<br>
                </p>
                <p>
                  대한상공회의소
                </p>
              </div>
            </li>
            <li class="skills-item">정보기술자격(ITQ)한글엑셀 B등급<br>
              <div>
                <p class="more-content">
                  2008.08 최종 합격<br>
                </p>
                <p>
                  한국생산성본부(KPC)
                </p>
              </div>
            </li>
          </ul>
        </article>
        <article>
          <div class="content-title">etc.</div>
          <ul class="skills-box">
            <li class="skills-item">1종보통운전면허<br>
              <div>
                <p class="more-content">
                  2012.04 최종 합격<br>
                </p>
                <p>
                  경찰청(운전면허시험관리단)
                </p>
              </div>
            </li>
            <li class="skills-item">전산회계2급 (국가공인)<br>
              <div>
                <p class="more-content">
                  2009.11 최종 합격<br>
                </p>
                <p>
                  한국세무사협회
                </p>
              </div>
            </li>
          </ul>
        </article>
      </q-page>


    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'LicenseList',

});

const moreItem = ref('');
const moreToggle = ref(false);
const openAllMore = ref(false);
const moreVisible = (item) => {
  moreItem.value = item;
  moreToggle.value = !moreToggle.value;
}


const openMore = () => {
  moreItem.value = '';
  openAllMore.value = !openAllMore.value
}

const orange = ref(false);


</script>
