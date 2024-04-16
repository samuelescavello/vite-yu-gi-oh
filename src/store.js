import {reactive} from 'vue';

export const store = reactive({
    ApiUrl: 'https://db.ygoprodeck.com/api/v7/',
    endpoint:{
        infCard: 'cardinfo.php'
    },
    options: {
        params:{
            num: 20,
            offset: 0
        }
    },
    cards: [],
})