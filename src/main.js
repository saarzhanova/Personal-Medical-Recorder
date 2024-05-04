import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AccountPage from "@/components/AccountPage";
import MedicalCard from "@/components/MedicalCard";
import DiseaseCard from "@/components/DiseaseCard";
import Calendar from "@/components/Calendar";
import Chat from "@/components/Chat";
import DiseaseCardModified from "@/components/DiseaseCardModified";
// import axios from 'axios';


// const response = axios.get('https://express-server-bt9z.onrender.com/data/')
// console.log('refresh response', response)

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        { path: '/account', name:'AccountPage', props:true, component: AccountPage },
        { path: '/medical-card', name:'MedicalCard', props:true, component: MedicalCard },
        { path: '/new', name:'DiseaseCardModified', props:true, component: DiseaseCardModified },
        { path: '/medical-card/:id', name:'DiseaseCard', props:true, component: DiseaseCard },
        { path: '/calendar', name:'Calendar', props:true, component: Calendar },
        { path: '/chat', name:'Chat', props:true, component: Chat },
        {path: '/', redirect: '/chat'}
    ]
});

const app = createApp(App)
app.use(router);
app.mount('#app')
