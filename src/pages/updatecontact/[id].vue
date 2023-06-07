<template>
    <main>
        <Updatecontact :id="id" />
    </main>
</template>

<script setup>
import Updatecontact from "../../components/Updatecontact.vue"
import {useRoute} from "vue-router"


const route = useRoute()
const id = route.params.id;



</script>