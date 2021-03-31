<template>
  <div>
    <h3>Processos:</h3>
    <b-form-input v-model="text" placeholder=" "></b-form-input>
    <div class="mt-2">Value: {{ text }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>
