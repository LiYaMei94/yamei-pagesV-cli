<template>
  <div id="index_wrap">
    我是页面
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Getter, Mutation } from 'vuex-class';
import {} from './indexTS.ts'
@Component({})
export default class Index extends Vue {
  @Getter userInfo;
}
</script>

<style lang="scss">
@import "./index.scss";
</style>
