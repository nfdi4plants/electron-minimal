<template>
  <div class='window'>
    <h1><img src='./assets/dpLogo.svg' style="display:inline-block;height:3em;margin:-1.2em -1em -1.2em -1em;"/>ARC Commander Mini</h1>
    <br>
    <b>{{SomeInt}}</b>
    <br>
    <br>
    <button @click='SomeInt++'>+</button>
  </div>
</template>

<script lang="ts" setup>

import { setCssVar } from 'quasar';
setCssVar('primary', '#2d3e50');

import { onMounted, ref, reactive } from 'vue';

const SomeInt = ref(0);

onMounted(() => {
  console.log('mounted');
});

</script>

<style>

.no-selection {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

html, body {
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

h1 {
  font-weight: bold;
  font-size: 2em !important;
  background-color: #2d3e50;
  color: white;
  /*border-top-left-radius: 0.5em;*/
  /*border-top-right-radius: 0.5em;*/
  margin: 0;
}
h2 {
  font-size: 2em !important;
  background-color: #2d3e50;
  color: white;
  /*border-bottom-left-radius: 0.5em;*/
  /*border-bottom-right-radius: 0.5em;*/
  margin: 0;
  min-height: 1em;
}

.window {
  margin:0 auto;
  text-align:center;
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  border-bottom:2em solid #2d3e50;
  overflow: hidden;
}

</style>
