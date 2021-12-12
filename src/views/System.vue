<template>
  <div>
    系统开关 <a-switch default-checked @change="onChange" />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onChange(checked) {
      console.log(`a-switch to ${checked}`);
    },
  },
};
</script>
