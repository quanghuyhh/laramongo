<template>
    <div v-if="errors && Object.keys(errors).length">
        <div class="font-medium text-red-600">Whoops! Something went wrong.</div>

        <ul class="mt-3 list-disc list-inside text-sm text-red-600">
            <li v-for="(index, error) in errors" v-html="errors[error][0]" :key="index"></li>
        </ul>
    </div>

</template>

<script>
export default {
    props: {
        errors: Object
    }
}
</script>

<style>

</style>