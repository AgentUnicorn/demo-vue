<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore();
const products = computed(() => store.getters.filteredProducts)
</script>

<template>
  <WelcomeItem v-for="product in products" :key="product.id">
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>{{product.name}}</template>
    <template #category>
      {{product.category}}
    </template>

    <button @click="increment">
      {{count}}
    </button>
  </WelcomeItem>
</template>
