<template>
  <button
    class="rounded-2xl bg-white text-4xl text-center m-4 p-2 py-4 w-80"
    style="box-shadow: -3px 4px 8px 1px #6e2e2b"
  >
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