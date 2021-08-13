import * as React from "react";
import { copyType } from "./Copyright.interface";

const Copyright: React.FC<copyType> = ({name}: copyType) => {
    const date = new Date().getFullYear();
    console.log('date: ', date);
    const text = ' | All right reserved';
    return <p>&#169;{` ${date} ${name} ${text}`}</p>
}

export default Copyright;