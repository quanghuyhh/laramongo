<template>
    <div class="font-medium text-sm text-green-600" v-if="status">
        {{ status}}
    </div>
</template>

<script>
export default {
    props: ['status']
}
</script>
