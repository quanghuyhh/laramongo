<template>
    <div class="demo">
        <Login />
        <ResetPassword />
        <ConfirmPassword />
        <ForgotPassword />
        <VerifyEmail />
    </div>
</template>

<script>
import Login from "./Login.vue";
import ResetPassword from "./ResetPassword.vue";
import ConfirmPassword from "./ConfirmPassword.vue";
import ForgotPassword from "./ForgotPassword.vue";
import VerifyEmail from "./VerifyEmail.vue";
export default {
    components: {
        Login,
        ResetPassword,
        ConfirmPassword,
        ForgotPassword,
        VerifyEmail
    }
}
</script>

<style>

</style>