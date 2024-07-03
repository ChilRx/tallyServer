import { initializeApp } from 'firebase-admin/app';
import admin from 'firebase-admin'

import { getDatabase, ref,set } from "firebase/database";

import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('./sfhacks2025-firebase-adminsdk-7t9f7-138858689d.json', 'utf8'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sfhacks2025-default-rtdb.firebaseio.com"
});
const database = admin.database();


//test writing/reading from database
const write = (s, id)=>{
    set(ref(database,'blah/' + id), {
        word: s
    });
    console.log("successfully written")
    return


}




export {database}