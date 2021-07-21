<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div>
            <a href="/">
                <Logo class="w-20 h-20 fill-current text-gray-500" />
            </a>
        </div>

        <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <div class="mb-4 text-sm text-gray-600">
                Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.
            </div>

            <div class="mb-4 font-medium text-sm text-green-600" v-if="status == 'verification-link-sent'">
                A new verification link has been sent to the email address you provided during registration.
            </div>

            <div class="mt-4 flex items-center justify-between">
                <form method="POST" action="/resend">
                    <div>
                        <Button>Resend Verification Email</Button>
                    </div>
                </form>

                <form method="POST" action="/logout">
                    <button type="submit" class="underline text-sm text-gray-600 hover:text-gray-900">
                        Log Out
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '../components/common/Logo.vue';
import Label from '../components/common/Label.vue';
import Input from '../components/common/Input.vue';
import Button from '../components/common/Button.vue';
export default {
    components: {
        Logo,
        Label,
        Input,
        Button
    },
    data() {
        return {
            status: 'false'
        }
    }
}
</script>

<style>

</style>