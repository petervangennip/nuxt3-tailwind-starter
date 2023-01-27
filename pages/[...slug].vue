<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <StoryblokComponent
      v-if="story"
      :blok="story.content"
    />
  </div>
</template>

<script setup>
  const route = useRoute();
  const { slug } = route.params;
  const story = await useAsyncStoryblok(slug && slug.length > 0 ? slug.join('/') : 'home', { version: 'draft' });

  const companyName = 'Project';
  const fullUrl = process.client ? window.location?.href : '';
  const { content } = story.value;

  const metaTitle = content.title ? `${content.title} | ${companyName}` : companyName;

  useHead({
    title: metaTitle,
    meta: [
      { name: 'description', content: content.description },
      { name: 'keywords', content: '' },
      { name: 'robots', content: '' },
      // open graph
      { 'og:type': 'website' },
      { 'og:title': metaTitle },
      { 'og:description': content.description },
      { 'og:image': content.image?.filename || '' },
      { 'og:image:secure_url': content.image?.filename || '' },
      { 'og:site_name': companyName },
      { 'og:url': fullUrl },
      // twitter
      { 'twitter:title': metaTitle },
      { 'twitter:description': content.description },
      { 'twitter:card': 'summary_large_image' },
      { 'twitter:image': content.image?.filename || '' },
      { 'twitter:url': fullUrl },
    ],
    bodyAttrs: {
      lang: 'nl',
    },
  });
</script>
