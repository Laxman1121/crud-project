<template>
  <main>
   <!-- <ModalView  :usercontacts="userContacts" :contactId="contactId"  @updateddata="updateHandler"  />  -->
  <div class="cards q-pa-lg row items-start q-gutter-lg q-mx-md" v-if="userContacts.length>0">  
    
    <q-card class="my-card" v-for="contact in userContacts" :key="contact.id">
 
       <div class="bgcolor" :style="{backgroundColor:getRandomColor()}">  
          <div class="cardColor"> </div>  
       </div>
      <div class="cardData">
        <q-card-section >
         <div class="username text-h6 ">{{contact.username}} </div>
         <div class="text-subtitle1"><i>{{contact.email}}</i></div>
         <div class="text-subtitle1"><span> BloodGroup:</span>{{contact.bgroup}}</div>
         <div class="text-subtitle1">{{ contact.phone }}</div>
        </q-card-section>
        <q-card-actions align="around" >
        <q-btn no-caps rounded @click="edithandler('updatecontact',contact.id)" padding="5px 15px" color="yellow" text-color="grey-9" label="Edit" />
        <q-btn no-caps rounded @click="deleteHandler(contact.id)" padding="5px 10px" color="deep-orange" text-color="white" label="Delete" />
        </q-card-actions>
      </div>
    </q-card>

  </div>
</main>
   
</template>

<script setup>

import { ref,defineEmits } from "vue";
import {useRouter} from "vue-router"
import {useMutation} from '@urql/vue'
import { deleteContacts } from "../queires";

//const randomcolor = ref(getRandomColor())
//console.log(getRandomColor());
const router = useRouter()

const contactId = ref(0)


/* Props */
const {userContacts} =   defineProps(["userContacts"])

/*Emits*/
const emit = defineEmits(["load"])

const edithandler =(name,id)=>{
  const val=id.toString()
   router.push({path:`${name}/${val}`,
  });
    contactId.value = id;
    
}


// UpdateMutation
// const update = useMutation(updateContacts)
// const updateHandler=async(updates)=>{
//     console.log(updates)
//     await  update.executeMutation({...updates})
    
//       emit("load")
      
// }

// DeleteMutation
const remove = useMutation(deleteContacts)
const deleteHandler = async(id)=>{
    
  const res = await remove.executeMutation({id:id})
       emit("load")
}


    function getRandomColor() {
        return "hsl(" + Math.random() * 360 +",100% ,75%)";
      };

</script>

<style  scoped>
.cards{
  width:100%;
  display: flex;
  flex-wrap:wrap;
 
}
.my-card {
  width:300px;
  display: flex;
  flex-direction:row;
  height: 250px;
 
}
.bgcolor{
  height:100%;
  width: 15%;
}
.cardColor{
   height: 80%;
   width: 100%;
}
.cardData{

    
    width: 85%;
    
   
}
.username{
  font-size:24px;
  font-weight: bold;
  margin-bottom: 7px;
   word-wrap: break-word;
   line-height: normal;
}

span {
  font-weight:600;
}
</style>