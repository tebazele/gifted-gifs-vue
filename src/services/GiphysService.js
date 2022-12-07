import { AppState } from "../AppState.js"
import { GiphyGif } from "../models/GiphyGif.js"
import { logger } from "../utils/Logger.js"
import { giphyApi } from "./AxiosService.js"


class GiphysService {
    async searchGiphy(query) {
        const res = await giphyApi.get('', { params: { q: query, limit: 10 } });
        logger.log('searched gifs', res.data.data);
        AppState.giphyGifs = res.data.data.map(d => new GiphyGif(d))
        logger.log(AppState.giphyGifs);
    }
}

export const giphysService = new GiphysService()