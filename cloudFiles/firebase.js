import { collection, addDoc } from "firebase/firestore";
import db from "./config.js";

function createCandidate(name, party, digit){
	try {
  	const docRef = await addDoc(collection(db, "Candidates"), {
	    name: "Luigi",
  	  party: "Moraes",
    	digit: 69
	  });
  	console.log("Document written with ID: ", docRef.id);
	} catch (e) {
  	console.error("Error adding document: ", e);
	}
}

function getCandidate(){}

function updateCandidate(){}

function deleteCandidate(){}
