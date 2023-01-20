import http from 'k6/http';
import { sleep } from 'k6';

const api_url = '';

export let options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
}

export default () => {

}