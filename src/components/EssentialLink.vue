<template>
  <q-item
    clickable
    @click="move(props.title)"
  >
    <q-item-section
      v-if="props.icon"
      avatar
    >
      <q-icon :name="props.icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label >{{ props.title }}</q-item-label>
      <q-item-label caption>{{ props.caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";

defineOptions({
  name: 'EssentialLink'
})

const $router = useRouter();

const props = defineProps({
  title: {
    type: String,
    required: true
  },

  caption: {
    type: String,
    default: ''
  },

  link: {
    type: String,
    default: '#'
  },

  icon: {
    type: String,
    default: ''
  }
})

const move = (address) => {
  console.log('address', address);
  if(address == '자기소개') {
    $router.push({
      path: `/about/AboutMe`,
    })
  } else if (address == '경력/스킬') {
    $router.push({
      path: `/skills/CarrerSkills`,
    })
  } else if (address == '프로젝트 소개') {
    $router.push({
      path: `/project/ProjectInfo`,
    })
  } else {

  }
}
</script>
