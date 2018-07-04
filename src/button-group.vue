<template>
    <div class="button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    .button-group {
        display: inline-flex;
        > * {
            border-radius: 0;
            margin-right: -1px;
        }
        > *:hover {
            z-index: 1;
        }
        :first-child {
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
        }
        :last-child {
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        }
    }
</style>