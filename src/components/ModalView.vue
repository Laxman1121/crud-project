<template>

    <div class="overlay" @click="close" >   
        <div class="modal" style="width:50%;background-color: azure;" >
            <form  >  
                <h4 class="text-h4 text-bold text-center q-mb-md ">User Details</h4> 
                        
                            
                            <q-input outlined  v-model="contact.username" :rules="[val => !!val || 'Name is required']" label="Username *"  />
                           
                            <br />
                            <q-input  outlined v-model="contact.email" :rules="[val => !!val || 'Email is required']" label="email *" />
                           
                            <br />
                            <q-input outlined  v-model="contact.bgroup" :rules="[val =>  val.length<=3 && !!val || 'Bgroup is required']" label="Bgroup *" />
                           
                                <br />
                            <q-input  outlined v-model="contact.phone" label="phone" />
                             <br />
                           
                        
                    
            </form>
            <div class="buttons q-mt-md" >
                <q-btn @click="submithandler" color="primary" label="Submit"  class="q-mr-md"/>
                <q-btn outline @click="cancelHandler" text-color="black" color="white" label="Cancel" class="q-mr-sm" />
                
            </div>
           
        </div>
    </div>
</template>

<script setup>
import {ref,onMounted} from "vue"
import {useRouter} from "vue-router"
import {defineEmits,defineProps} from "vue"
import {storeToRefs} from "pinia"
import {useContactStore} from "../store/useContactStore.js"

const contactsStore = useContactStore()
const {userContacts} = storeToRefs(contactsStore)

onMounted(async()=>{
 await contactsStore.getAllData();
})
const router = useRouter()
const contact = ref({
    username:"",
    email:"",
    bgroup:"",
    phone:"",
    id:null
})

//Props
const {contactId} = defineProps(["contactId"])

//Emits
const emit = defineEmits(["updateddata"])

if(contactId)
{
    
    userContacts.value.forEach((user)=>{
        
        if(user.id == contactId)
        {
            contact.value.id = contactId
            contact.value.username = user.username
            contact.value.email = user.email
            contact.value.bgroup = user.bgroup
            contact.value.phone = user.phone

        }
    })

    
}

const submithandler = ()=>{

    if(contact.value.username && contact.value.email && contact.value.bgroup && contact.value.phone)
    {
     
      emit("updateddata",{
        username:contact.value.username,
        email:contact.value.email,
        bgroup:contact.value.bgroup,
        phone:contact.value.phone,
        id:parseInt(contact.value.id)})

       cancelHandler()
    
    }
   
}

const cancelHandler=()=>{
    
     router.push({name:"Index"});
   
}
const close = (event) => {
    // console.log(event.target,event.currentTarget)
if(event.target === event.currentTarget){
    cancelHandler();
    
}

}

</script>

<style scoped>
/* 
COLOR orange #e86625 

*/


* {
    box-sizing: border-box;
    font-family: sans-serif;
}
.overlay{
    position:fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index:1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:rgba(0, 0, 0, 0.893);
}
.modal{
    position: absolute;
   padding:14px 32px 20px 32px;
   padding:32px 48px 28px 48px;
   width:auto;
   height:auto;
   background-color: #ffffee;
   background-color: white;
   border-radius: 8px;
}

.buttons{
    display: flex;
    justify-content: flex-end;
}
</style>