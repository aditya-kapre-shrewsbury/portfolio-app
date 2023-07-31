import GIT from "./GIT/GIT"
import IntelliJ from "./IntelliJ/IntelliJ"
import Linux from "./Linux/Linux"
import REST from "./REST/REST"

const Other = () => {

    return (
        <div>
            Other tab
            <REST />
            <GIT />
            <IntelliJ />
            <Linux />
        </div>
    )
}

export default Other