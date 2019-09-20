<template>
  <div class="layout-card">
    <slot></slot>
  </div>
</template>

<script></script>

<style lang="scss">
.layout-card {
  box-shadow: 0 0 5px #f0f0f0;
  transition: all 0.3s;
  border-radius: 2px;
}
.layout-card:hover {
  box-shadow: 0 0 5px #cccccc;
  transition: all 0.3s;
}
</style>
