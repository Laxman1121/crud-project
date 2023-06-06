import { defineStore } from "pinia";
import {ref} from 'vue'
import { showContacts } from "../queires";
import { useQuery } from "@urql/vue";
export const useContactStore =  defineStore("contactstore",()=>{

const userContacts=ref([]);
   // const userContact =ref({});
    //const contacts=ref([])
  
    const getData=  useQuery({query: showContacts,})
    
    const getAllData = async()=>{

     const res = await getData.executeQuery();
    
    userContacts.value =await JSON.parse(JSON.stringify(res.data.value.usercontacts))
    
    }
   
    
    return {
        
        userContacts,
        getAllData
    }

})