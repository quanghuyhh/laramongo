<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div>
            <a href="/">
                <Logo class="w-20 h-20 fill-current text-gray-500" />
            </a>
        </div>

        <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <form method="POST" action="">
                <!-- Password Reset Token -->
                <input type="hidden" name="token" value="">

                <!-- Email Address -->
                <div>
                    <Label for="email">Email</Label>

                    <Input id="email" class="block mt-1 w-full" type="email" name="email" :value="''" required autofocus />
                </div>

                <!-- Password -->
                <div class="mt-4">
                    <Label for="password">Password</Label>

                    <Input id="password" class="block mt-1 w-full" type="password" name="password" required />
                </div>

                <!-- Confirm Password -->
                <div class="mt-4">
                    <Label for="password_confirmation">Confirm Password</Label>

                    <Input id="password_confirmation" class="block mt-1 w-full"
                                        type="password"
                                        name="password_confirmation" required />
                </div>

                <div class="flex items-center justify-end mt-4">
                    <Button>Reset Password</Button>
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