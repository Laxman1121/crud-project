<template>
    <main>
      
        <div class="nav-container">
            <h3>UserContacts</h3>  
            <q-btn no-caps @click="router.push('addcontact')" rounded color="primary" label="Create" />
        </div>
    </main>
</template>

<script setup>
import { useRouter} from "vue-router"
import { defineEmits} from "vue"


const router = useRouter()
const emit = defineEmits(["load"])

</script>

<style scoped>
.nav-container{
    margin: 5rem 3rem 0 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}



</style>