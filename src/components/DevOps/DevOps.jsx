import AWS from "./AWS/AWS"
import Docker from "./Docker/Docker"
import Gradle from "./Gradle/Grade"

const DevOps = () => {

    return (
        <div>
            DevOps Tab
            <Docker />
            <AWS />
            <Gradle />
        </div>
    )
}

export default DevOps