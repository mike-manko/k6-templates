/*
 * Asses the current performance of the system
 */
import http from 'k6/http';
import { sleep } from 'k6';

// peak load to
const peak_load = 400;


export let options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '2m', target: peak_load }, // ramp up
    { duration: '5h56m', target: peak_load }, // stay @ N
    { duration: '2m', target: 0 }, // scale down
  ],
}

const api_url = '';
export default () => {

}