<template>
  <button v-on="$attrs.click ? { click: $attrs.click } : {}">
    <slot />
  </button>
</template>
