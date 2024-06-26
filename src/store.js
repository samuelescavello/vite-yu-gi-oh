import {reactive} from 'vue';

export const store = reactive({
    ApiUrl: 'https://db.ygoprodeck.com/api/v7/',
    endpoint:{
        infCard: 'cardinfo.php',
        archetype: 'archetypes.php'
    },
    options: {
        params:{
            num: 20,
            offset: 0,
            
        }
    },
    statusFilter: '',
    cards: [],
    archetypeList:[],
})