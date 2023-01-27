<template>
  <nuxt-img
    :src="transformImage(props.src, props.focus ? `/m/filters:focal(${props.focus})` : '')"
    :alt="props.alt"
  />
</template>

<script setup>
  const props = defineProps({
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    sizes: {
      type: String,
      default: '',
    },
    focus: {
      type: String,
      default: '',
    },
  });

  function transformImage(image, options) {
    if (!image) return '';
    if (image && !options) return image;

    return image + options;
  }
</script>
