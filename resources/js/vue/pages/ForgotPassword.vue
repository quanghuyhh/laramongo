<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div>
            <a href="/">
                <Logo class="w-20 h-20 fill-current text-gray-500" />
            </a>
        </div>

        <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <div class="mb-4 text-sm text-gray-600">
                Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
            </div>

            <form method="POST" action="">
                <!-- Email Address -->
                <div>
                    <Label for="email">Email</Label>

                    <Input id="email" class="block mt-1 w-full" type="email" name="email" :value="''" required autofocus />
                </div>

                <div class="flex items-center justify-end mt-4">
                    <Button>Email Password Reset Link</Button>
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
export default {
    components: {
        Logo,
        Label,
        Input,
        Button
    }
}
</script>

<style>

</style>