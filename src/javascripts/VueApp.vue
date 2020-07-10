<template>
  <p>{{ message }}</p>
</template>

<script>
export default {
  data: () => {
    console.log('Veujs is installed!');
    return {
      message: 'Hey, this is Vue!',
    };
  },
};
</script>

<style scoped>
P {
  color: green;
}
</style>
