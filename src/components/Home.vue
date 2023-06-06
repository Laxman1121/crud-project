<template>
  <main>
    <Navsection />
      <suspense>
        <Card :userContacts="userContacts" @load="loadhandler" />
      </suspense>
  </main> 
</template>

<script setup>
import Card from "./Card.vue"
import Navsection from "./Navsection.vue"
import { onMounted} from 'vue';
import {storeToRefs} from "pinia"
import {useContactStore} from "../store/useContactStore"

const contactsStore = useContactStore()
const {userContacts} = storeToRefs(contactsStore)


onMounted(async()=>{
   
 await contactsStore.getAllData();
  //console.log(userContacts.value);
})


const loadhandler =  async() => {
  await contactsStore.getAllData(); 
}

</script>

<style scoped>

</style>
