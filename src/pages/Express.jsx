import React, { useState, useRef } from "react";
import '../index.css'
import { Link } from "react-router-dom";
import { firestore } from '../firebase'
import { addDoc, collection, getDocs } from "firebase/firestore";

const Express = () => {
    const nicknameRef = useRef();
    const messageRef = useRef();

    const ref = collection(firestore, "data")

    const handleSave = async(e) => {
        e.preventDefault();

        let data = {
            nickname: nicknameRef.current.value,
            message: messageRef.current.value,
        };

        try {
            await addDoc(ref, data);
            console.log("Succesfully Submitted!")
            nicknameRef.current.value = "";
            messageRef.current.value = "";
        } catch(e) {
            console.error("Error submitting:", e);
        }
    }


    
  return <div className="flex justify-center mt-[120px] text-white">
            <div>
                <h1 className="text-[50px] text-center mb-[20px]">
                    Say it loud.
                </h1>
                <form onSubmit={handleSave}>
                    <div className="flex flex-col">
                        <input 
                        className="border p-[1rem] mb-[1rem] rounded-md" 
                        type="text" 
                        placeholder="any nickname?" 
                        ref={nicknameRef}
                        required
                        />
                        
                        <textarea 
                        placeholder="Rants, Stories, Motivation, and etc." 
                        className="border w-[20rem] h-[30rem] p-[1rem] rounded-md"
                        ref={messageRef}
                        required
                        >

                        </textarea>
                    </div>
                    <div className="flex justify-between">
                        <Link to={'/'}>
                            <button className="border mt-[1rem] hover:bg-red-500 w-[100px] self-center p-[1rem] rounded-md">Back</button>
                        </Link>
                        <button className="hover:translate-y-[-10px] border mt-[1rem] w-[100px] self-center p-[1rem] rounded-md">Submit</button>
                    </div>
                </form>
            </div>
        </div>;
};

export default Express;
