<template>
  <button class="rounded-2xl bg-white text-4xl text-center m-4 p-2 py-4 w-80">
    {{ Msg }}
  </button>
</template>

<script>
export default {
  props: {
    Msg: String,
  },
};
</script>