<template>
  <div v-editable="blok">
    <StoryblokComponent
      v-for="blok in props.blok.content"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script setup>
  const props = defineProps({
    blok: {
      type: Object,
      default: () => ({}),
    },
  });
</script>
