<template>
    <main>
        <ModalView @updateddata="updateHandler" :contactId="id" />
    </main>
</template>

<script setup>
import ModalView from "./ModalView.vue"
import { defineProps } from "vue";
import {useMutation} from '@urql/vue'
import { updateContacts } from "../queires";
import { useContactStore } from "../store/useContactStore";

const contactStore = useContactStore()

const {id} = defineProps(["id"])



const update = useMutation(updateContacts)
const updateHandler=async(updates)=>{
    console.log(updates)
    await  update.executeMutation({...updates})
    await contactStore.getAllData();
     
      
}
    


</script>