<template>
  <section class="row">
    <div class="col-3 bg-dark text-light text-center">
      <section class="row pt-5">
        <div class="col-12">
          <FormComponent />
        </div>
      </section>

      <!-- <h2>Add a Gift!</h2>
      <form>
        <input type="text" name="tag" placeholder="Tag" class="w-75 mx-5 my-2" />
        <input type="text" name="url" placeholder="Gif URL" class="w-75 mx-5" />
        <button class="btn btn-outline-light m-3">Submit</button>
      </form> -->

    </div>
    <div class="col-9">

      <section class="row ps-3 text-center">
        <GiftComponent v-for="g in gifts" :gift="g" />


        <!-- <div class="col-4 p-2" v-for="g in gifts" :gift="g">
            <div class="card rounded">
              <img :src="g.url" class="img-fluid gift-img" />
              <h5 class="mt-1">{{ g.tag }}</h5>
            </div>
          </div> -->
      </section>

    </div>
  </section>

</template>

<script>
import { onMounted, computed } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { giftsService } from '../services/GiftsService.js'
import { AppState } from '../AppState.js';

export default {
  setup() {
    onMounted(() => {
      getGifts()
    })
    async function getGifts() {
      try {
        await giftsService.getGifts()
      } catch (error) {
        logger.error(error)
        Pop.error(error)
      }
    }

    // async function createGift() {

    // }

    return {
      gifts: computed(() => AppState.gifts)

    }
  }
}
</script>

<style scoped lang="scss">

</style>
