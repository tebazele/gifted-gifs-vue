<template>
    <div class="col-3 p-2 m-4 unopened-gift selectable" v-if="(!gift.opened)" @click="openGift(gift.id)">
        <h1 class="text-light">Opened? {{ gift.opened }}</h1>
    </div>
    <div class="col-4 p-2" v-else>
        <div class="card rounded gift-card">
            <img :src="gift.url" class="img-fluid gift-img" />
            <h5 class="mt-1">{{ gift.tag }}</h5>
            <h6>Opened? {{ gift.opened }}</h6>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Gift } from '../models/Gift.js';
import { logger } from '../utils/Logger.js';
import { giftsService } from '../services/GiftsService.js';
export default {
    props: { gift: Gift },
    setup() {

        return {
            async openGift(id) {
                try {
                    logger.log(id)
                    await giftsService.openGift(id)
                } catch (error) {
                    logger.log(error)
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped>
.unopened-gift {
    background-image: url('https://images.unsplash.com/photo-1550537687-c91072c4792d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80');
    height: 30vh;
    background-size: cover;
}

.gift-img {
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: 30vh;
}

.gift-card {
    height: 40vh;
}
</style>