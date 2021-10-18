//import axios from 'axios';

export const fetchDemoJson = (data) => ({
    type: 'demoJson/fetch',
    payload: {data: data}
});