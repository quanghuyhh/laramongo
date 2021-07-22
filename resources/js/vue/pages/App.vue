<template>
    <Loading v-show="loading"/>
    <div :class="['font-sans antialiased', isLogged ? 'text-gray-900' : null]">
        <router-view></router-view>
    </div>
</template>

<script>
import Login from "./Login.vue";
import ResetPassword from "./ResetPassword.vue";
import ConfirmPassword from "./ConfirmPassword.vue";
import ForgotPassword from "./ForgotPassword.vue";
import VerifyEmail from "./VerifyEmail.vue";
import Navigation from "../components/common/Navigation.vue";
import Loading from "../components/common/Loading.vue";

import {mapGetters, mapState} from 'vuex';

export default {
    components: {
        Login,
        ResetPassword,
        ConfirmPassword,
        ForgotPassword,
        VerifyEmail,
        Navigation,
        Loading
    },
    computed: {
        ...mapGetters('auth', ['user', 'isLogged']),
        isLogin() {
            return this.user ?? false;
        },
        loading: {
            get() {
                return this.$store.getters.common;
            },
            set(state) {
                this.$store.commit('common/SET_LOADING', state)
            }
        }
    },
    async mounted() {
        await this.fetchUser();
    },
    methods: {
        async fetchUser() {
            await this.axios.get('/me')
            .then(response => {
                let userData = {
                    access_token: localStorage.getItem('access_token'),
                    user: response.data
                };
                this.$store.commit('auth/SET_USER', userData)
                this.$router.push('/');
            })
            .catch(({response}) => {
                this.errors = response.hasOwnProperty('data') ? response.data : {};
                this.$router.push('/login');
            }).finally(() => this.loading = false)
        }
    }
}
</script>

<style>

</style>