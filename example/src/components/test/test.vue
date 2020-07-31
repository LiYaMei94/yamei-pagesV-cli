<template>
  <div id="test_wrap">
    我是页面
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Getter, Mutation } from 'vuex-class';
import {} from './testTS.ts'
@Component({})
export default class Test extends Vue {
  @Getter userInfo;
}
</script>

<style lang="scss">
@import "./test.scss";
</style>
