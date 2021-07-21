<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <div>
            <a href="/">
                <Logo class="w-20 h-20 fill-current text-gray-500" />
            </a>
        </div>

        <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <div class="mb-4 text-sm text-gray-600">
                This is a secure area of the application. Please confirm your password before continuing.
            </div>

            <form method="POST" action="">
                <!-- Password -->
                <div>
                    <Label for="password">Password</Label>

                    <Input id="password" class="block mt-1 w-full"
                                    type="password"
                                    name="password"
                                    required autocomplete="current-password" />
                </div>

                <div class="flex justify-end mt-4">
                    <Button>Confirm</Button>
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