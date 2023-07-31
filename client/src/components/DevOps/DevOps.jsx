import AWS from "./AWS/AWS"
import Docker from "./Docker/Docker"
import Gradle from "./Gradle/Grade"

const DevOps = () => {

    return (
        <div id="devops">
            <div className="text-xl font-semibold leading-7 text-white-950 m-5">DevOps</div>
            <Docker />
            <AWS />
            <Gradle />
        </div>
    )
}

export default DevOps