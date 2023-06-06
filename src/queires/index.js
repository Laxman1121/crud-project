import { gql } from "@urql/vue";

export const showContacts = gql`
query showContacts {
    usercontacts {
        id
        username
        email
        bgroup
        phone
    }
}
`
export const updateContacts=gql`
mutation update($username:String!,$email:String!,$bgroup:String!,$phone:String!,$id:Int!) {
   updateUsercontact( input:{
      patch:{
        username:$username
        email:$email
        bgroup:$bgroup
        phone:$phone
      },id:$id
    }){
      usercontact{
        username
      }
    }
}
`
export const createContacts = gql`
mutation create($username:String!,$bgroup:String!,$phone:String!,$email:String!){
    createUsercontact(input:{usercontact:{
      username:$username
      bgroup:$bgroup
      email:$email
      phone:$phone
    }
    }){
    usercontact{
      username
      email
      bgroup
      phone
    }
  }
} 
`
export const deleteContacts = gql`
mutation delete($id:Int!){
  deleteUsercontact(
  input:{
    id:$id
  }){
    usercontact{
      username
    }
  }
}
`