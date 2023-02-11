import { createContext, useState } from "react";

export const  Datacontext = createContext(null);


const Dataprovider = () => {
    const [account , setAccount] = useState('');

    return (
        <Datacontext.Provider value={{
            account,
            setAccount
        }

        }>
            </Datacontext.Provider>
    )
}

export default Dataprovider;