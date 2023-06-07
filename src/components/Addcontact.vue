<template>
    <main>
       <div></div>
        <ModalView @updateddata="createhandler" />
    </main>  
</template>

<script setup>
import ModalView from "./ModalView.vue"
import { useMutation } from "@urql/vue";
import { createContacts } from "../queires";
import { useContactStore } from "../store/useContactStore";

const contactStore = useContactStore()
const create=useMutation(createContacts)
const createhandler= async(data)=>{

 await create.executeMutation({...data})
 await contactStore.getAllData();

}


</script>