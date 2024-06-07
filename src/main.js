import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AccountPage from "@/components/AccountPage";
import MedicalCard from "@/components/MedicalCard";
import DiseaseCard from "@/components/DiseaseCard";

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        { path: '/account', name:'AccountPage', props:true, component: AccountPage },
        { path: '/medical-card', name:'MedicalCard', props:true, component: MedicalCard },
        { path: '/medical-card/:id', name:'DiseaseCard', props:true, component: DiseaseCard },
        {path: '/', redirect: '/account'}
    ]
});

const app = createApp(App)
app.use(router);
app.mount('#app')
