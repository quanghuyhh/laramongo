<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div>
            <a href="/">
                <Logo class="w-20 h-20 fill-current text-gray-500" />
            </a>
        </div>

        <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <!-- Session Status -->
            <AuthSessionStatus :status="status"/>

            <!-- Validation Errors -->
            <AuthValidationErrors class="mb-4" :errors="errors" />

            <form method="POST" action="/" @submit.prevent="submit">
                <!-- Email Address -->
                <div>
                    <Label for="email">Email</Label>
                    <Input id="email" :class="'block mt-1 w-full'" type="email" v-model="email" name="email" autofocus />
                </div>

                <!-- Password -->
                <div class="mt-4">
                    <Label for="password">Password</Label>
                    <Input id="password" :class="'block mt-1 w-full'" type="password" name="password" v-model="password"  />
                </div>

                <!-- Remember Me -->
                <div class="block mt-4">
                    <label for="remember_me" class="inline-flex items-center">
                        <input id="remember_me" type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember">
                        <span class="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div class="flex items-center justify-end mt-4">
                    <Button :class="'ml-3'">Log in</Button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Logo from '../components/common/Logo.vue';
import Label from '../components/common/Label.vue';
import Input from '../components/common/Input.vue';
import Button from '../components/common/Button.vue';
import AuthSessionStatus from '../components/common/AuthSessionStatus.vue';
import AuthValidationErrors from '../components/common/AuthValidationErrors.vue';
export default {
    components: {
        Logo,
        Label,
        Input,
        Button,
        AuthSessionStatus,
        AuthValidationErrors
    },
    data() {
        return {
            email: null,
            password: null,
            status: null,
            errors: {}
        }
    },
    methods: {
        async submit() {
            await this.axios.post('/auth/login', {email: this.email, password: this.password})
            .then(response => {
                this.$router.push('/');
                this.$store.commit('auth/SET_USER', response.data)
            })
            .catch(({response}) => {
                this.errors = response.hasOwnProperty('data') ? response.data : {};
            })
        }
    }
}
</script>

<style>

</style>