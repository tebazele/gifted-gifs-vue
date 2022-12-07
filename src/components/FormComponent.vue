<template>
    <h2>Add a Gift!</h2>
    <form @submit.prevent="createGift">
        <input type="text" v-model="formData.tag" placeholder="Tag" class="w-75 mx-3 my-2" required />
        <input type="text" v-model="formData.url" placeholder="Gif URL" class="w-75 mx-3" required />
        <button class="btn btn-outline-light m-3">Submit</button>
    </form>
    <h5>Search gifs here!</h5>
    <form class="input-group" @submit.prevent="searchGiphy()">
        <input type="text" class="ms-2" v-model="search.query" />
        <button class="btn btn-outline-light"><i class="mdi mdi-magnify"></i></button>
    </form>
    <div>
        <img src="" class="img-small img-fluid" />
    </div>

</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { giftsService } from '../services/GiftsService.js';
import { giphysService } from '../services/GiphysService.js';

export default {
    setup() {
        const formData = reactive({
            tag: '',
            url: ''
        })
        const search = reactive({
            query: ''
        })


        return {
            formData,
            async createGift() {
                try {
                    await giftsService.createGift(formData)

                } catch (error) {
                    logger.log(error)
                    Pop.error(error)
                }
            },
            search,
            async searchGiphy() {
                try {
                    await giphysService.searchGiphy(search.query)
                } catch (error) {
                    logger.log(error)
                    Pop.error(error)
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped>
.img-small {
    height: 10vh;
}
</style>