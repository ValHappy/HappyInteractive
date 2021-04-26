import React, { createContext, useState } from 'react';

export default ({ children }) => {
    const [info, setInfo] = useState();

    return (
        <MenuContext.Provider value={[info, setInfo]}>
            {children}
        </MenuContext.Provider>
    );
}

export const MenuContext = createContext();