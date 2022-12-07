import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class GiftsService {
    async getGifts() {
        const res = await api.get('')
        logger.log('got gifts', res.data)
        // AppState.gifts = res.data.map(d => new Gift(d))
        // logger.log(AppState.gifts)
        AppState.gifts = res.data.map(data => new Gift(data))
        logger.log(AppState.gifts)
    }

    async openGift(id) {
        try {
            let foundGift = AppState.gifts.find(g => g.id == id)
            logger.log(foundGift)
            foundGift.opened = !foundGift.opened;
            let res = await api.put(id, foundGift)
            let foundIndex = AppState.gifts.findIndex(g => g.id == id)
            AppState.gifts.splice(foundIndex, 1, new Gift(res.data))

            // logger.log()

        } catch (error) {
            logger.log(error)
        }
    }

    async createGift(formData) {
        // logger.log(formData)
        try {
            let res = await api.post('', formData)
            logger.log(res.data)
            AppState.gifts.unshift(new Gift(res.data))
            formData = { tag: '', url: '' }
        } catch (error) {
            logger.log(error)
        }

    }

}

export const giftsService = new GiftsService()