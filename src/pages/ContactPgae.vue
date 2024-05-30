<template>
  <q-layout>
    <q-page-container>
      <div class="page-background">
        <div class="contact-message">
          <p class="main-message">“here and now”</p>
          <p class="sub-message">지나간 과거에 집착하지 않고, 막연한 미래를 걱정하기 보다는<br>오늘 해야 할 일을 먼저 해내는 것이 중요하다고 생각합니다.<br><br>사용자 인터페이스와 사용자 경험을 기술적으로 정확하게 구현하고<br>최적화된 성능을 갖춘 소프트웨어를 개발하는 것을 목표로 나아가고 있습니다.<br><br>함께 성장하며, 정상에 도달하기를 희망합니다.</p>
          <!-- <p class="sub-message">ⓒ Copyright 2024</p> -->
        <ul class="contact-list-wrap">
          <li class="contact-list">
            <a href="tel:01042144265"><i class="fa-solid fa-mobile-screen-button contact-icon"></i></a>
            <p class="contact-content">
              call
            </p>
          </li>
          <li class="contact-list">
            <a href="mailto:yesyun93@gmail.com"><i class="fa-solid fa-envelope contact-icon"></i></a>
            <p class="contact-content">
              mail
            </p>
          </li>
        </ul>
        </div>
        <p class="copy">ⓒ Copyright 2024</p>
      </div>

    </q-page-container>
  </q-layout>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.q-layout {
  min-height: inherit !important;
}
.contact-message {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #dddddd;
  padding: 30px;
  .main-message {
    font-family: 'YESMyoungjo-Regular';
    font-size: 20px;
    letter-spacing: 14px;
    text-align: center;
    color: #eeeeee;
    transition: all .3s ease-in-out;
  }
  .sub-message {
    margin-top: 20px;
    text-align: center;
    transition: all .3s ease-in-out;
  }
}
.page-background {
  position: relative;
  width: 100%;
  height: calc(100vh - 150px);
}
.page-background::after {
  content: '';
  height: calc(100vh - 150px);
  width: 100%;
  background-image: url('../img/contact_background_blur_2.png');
  background-repeat : no-repeat;
  background-size : cover;
  position: absolute;
  top: 0;
  opacity: 0.68;
  z-index: -1;
}
.page-background::before {
  content: '';
  height: calc(100vh - 150px);
  width: 100%;
  background-color: #000000;
  position: absolute;
  top: 0;
  z-index: -1;
}
.contact-list-wrap {
  display: flex;
  gap: 24px;
  justify-content: center;
  margin-top: 30px;
}
.contact-icon{
  border: 1px solid #929292;
  color: #929292;
  opacity: 0.8;
  width: 60px;
  height: 60px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  cursor: pointer;
  transition: all .3s ease-in-out;
}
.contact-icon:hover{
  border: 2px solid #eeeeee;
  color: #eeeeee;
}
.contact-content {
  display: none;
  text-align: center;
  color: #ffffff;
}
.copy {
  position: absolute;
  bottom: 0;
  color: #767676;
  left: 50%;
  transform: translate(-50%);
  padding-bottom: 20px;
  font-size: 12px;
  transition: all .3s ease-in-out;
}

@media (max-width: 480px) {
  .contact-message {
    .main-message {
      font-size: 18px;
      letter-spacing: 8px;
    }
    .sub-message {
      font-size: 12px;
    }
  }
  .contact-icon {
    width: 50px;
    height: 50px;
    font-size: 20px;
  }
  .copy {
    font-size: 10px;
  }
}
</style>
