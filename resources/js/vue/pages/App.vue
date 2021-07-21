<template>
    <Loading v-if="loading"/>
    <div class="font-sans antialiased" v-if="isLogged">
        <div class="min-h-screen bg-gray-100">
            <Navigation />

            <!-- Page Heading -->
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                        Dashboard
                    </h2>
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <div class="py-12">
                    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div class="p-6 bg-white border-b border-gray-200">
                                You're logged in!
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>

    <div class="font-sans text-gray-900 antialiased" v-else>
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