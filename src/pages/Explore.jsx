import React, { useState } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const Explore = (e) => {

    

    const [randomMessage, setRandomMessage] = useState({});
    const [disableButton, setDisableButton] = useState(false);

    const colRef = collection(firestore, "data");

        const getRandomMessage = async () => {

          try {
            const colRef = collection(firestore, "data");
            const snapshot = await getDocs(colRef);
            const data = snapshot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));
      
            if (data.length > 0) {
              const randomIndex = Math.floor(Math.random() * data.length);
              setRandomMessage(data[randomIndex]);
            } else {
              setRandomMessage(null);
            }
            setDisableButton(true)
          } catch (err) {
            console.log("Error fetching data:", err.message);
          }
        };


  return <div className="flex justify-center mt-[120px] text-white">
            <div>
                <h1 className="text-[50px] text-center">
                    Say it loud.
                </h1>
                <p className="text-[10px] text-center mb-[20px]">
                Share freely, but stay respectful, avoid harmful language. <br/>
                Neon • {new Date().getFullYear()}
                </p>
                <div className="flex flex-col">


                {!disableButton ? (
                    <button
                        className="hover:translate-y-[-10px] border mt-[1rem] w-[200px] self-center p-[1rem] rounded-md"
                        onClick={() => {
                            getRandomMessage();
                            setDisableButton(true);
                        }}
                        >
                        Get random message
                        </button>
                    ) : (
                        <button
                        className="hover:translate-y-[-10px] border mt-[1rem] w-[200px] self-center p-[1rem] rounded-md opacity-50 cursor-not-allowed"
                        disabled
                        >
                        Get random message
                        </button>
                    )
                        }


                {randomMessage && (
                    <div className="border p-4 rounded-lg shadow mt-[40px] w-[300px] text-center">

                        {!disableButton ? (
                            <h2 className="text-xl font-bold">{`Please click the button to generate. ❤`}</h2>
                        ) : (
                            <h2 className="text-xl font-bold">{`@${randomMessage.nickname}`}</h2>
                        )}
                        
                        <p className="mt-2">{randomMessage.message}</p>
                    </div>
                )}
                    <div className="flex justify-center">
                        <Link to={'/'}>
                            <button className="border hover:bg-red-500 w-[100px] self-center p-[1rem] rounded-md mt-[200px]">Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>;
};

export default Explore;
