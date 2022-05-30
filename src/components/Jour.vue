<template>
  <div
    class="
      flex flex-col
      justify-center
      items-center
      rounded-lg
      border border-Custom-black border-dashed
      w-max
      p-4
    "
  >
    <p class="text-4xl font-semibold text-left text-Custom-red">{{ jour }}</p>
    <p class="text-4xl font-semibold text-left text-Custom-red">
      {{ date }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    jour: String,
    date: String,
  },
};
</script>