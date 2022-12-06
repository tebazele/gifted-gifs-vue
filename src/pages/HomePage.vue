<template>
  <section class="row ps-3 text-center">
    <div class="col-4 p-2" v-for="c of 20">
      <div class="card rounded">
        <img src="https://thiscatdoesnotexist.com" class="img-fluid gift-img" />
        <h5 class="mt-1">Some cool tag</h5>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.gift-img {
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
