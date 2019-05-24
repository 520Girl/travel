<template>
  <div class="Alphabet">
    <ul>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
      <li>A</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "CityAlphabet"
}
</script>
<style lang="scss" scoped>
.Alphabet {
  display: flex;
  flex-direction: column;
  justify-content: center;
  //transform: translateY(50%);
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  font-size: 0.3rem;
  color: #00badc;
  ul {
    li {
      line-height: 0.4rem;
      text-align: center;
    }
  }
}
</style>
