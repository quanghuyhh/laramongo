<template>
    <div class="font-medium text-sm" v-if="status">
        {{ status}}
    </div>
</template>

<script>
export default {
    props: ['status']
}
</script>
