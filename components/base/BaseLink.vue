<template>
  <nuxt-link
    :id="props.id"
    :to="props.href"
    :target="props.target"
  >
    <slot />
  </nuxt-link>
</template>

<script setup>
  const props = defineProps({
    id: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: null,
    },
  });
</script>
