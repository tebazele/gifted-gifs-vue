import { AppState } from "../AppState.js"
import { GiphyGif } from "../models/GiphyGif.js"
import { logger } from "../utils/Logger.js"
import { giphyApi } from "./AxiosService.js"


class GiphysService {
    async searchGiphy(query) {
        try {
            const res = await giphyApi.get('', { params: { q: query, limit: 1 } })
            logger.log('searched gifs', res.data)

            AppState.giphyGifs = res.data.map(d => new GiphyGif(d))
            logger.log(AppState.giphyGifs)
        } catch (error) {
            logger.log(error)
        }
    }
}

export const giphysService = new GiphysService()