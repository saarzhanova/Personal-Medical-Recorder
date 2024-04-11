import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AccountPage from "@/components/AccountPage";
import MedicalCard from "@/components/MedicalCard";
import DiseaseCard from "@/components/DiseaseCard";
import Calendar from "@/components/Calendar";
import Chat from "@/components/Chat";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/account', name:AccountPage, component: AccountPage },
        { path: '/medical-card', name:MedicalCard, component: MedicalCard },
        { path: '/disease-card', name:DiseaseCard, component: DiseaseCard },
        { path: '/calendar', name:Calendar, component: Calendar },
        { path: '/chat', name:Chat, component: Chat },
        {path: '/', redirect: '/chat'}
    ]
});

const app = createApp(App)
app.use(router);
app.mount('#app')
