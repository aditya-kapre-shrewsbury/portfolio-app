import Angular from "./Angular/Angular"
import Database from "./Database/Database"
import Java from "./Java/Java"
import JavaScript from "./JavaScript/JavaScript"
import Kotlin from "./Kotlin/Kotlin"
import React from "./React/React"
import SpringBoot from "./SpringBoot/SpringBoot"

const Programming = () => {
    return (
        <div id="programming">
            <div className="text-xl font-semibold leading-7 text-white-950 m-5">Programming</div>
            <Java />
            <Kotlin />
            <SpringBoot />
            <JavaScript />
            <Angular />
            <React />
            <Database />
        </div>
        
    )
}

export default Programming