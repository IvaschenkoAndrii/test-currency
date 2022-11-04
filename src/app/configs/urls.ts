import {environment} from '../../environments/environment';

const {API} = environment;

const urls = {
  currency: `${API}/statdirectory/exchange?json`
}

export {
  urls
}
