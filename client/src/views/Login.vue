
<template>
    <div class="login">
    <Credentials></Credentials>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Credentials from '../components/Credentials.vue'

export default defineComponent({

    components:{ Credentials }
})
</script>
