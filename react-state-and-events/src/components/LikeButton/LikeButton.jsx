import heartOn from './../../assets/heart-on.svg'
import heartOff from './../../assets/heart-off.svg'
import { useState } from 'react'

const LikeButton = () => {

    const [doesLike, setDoesLike] = useState(false)

    const handleLike = () => {
        setDoesLike(!doesLike)
    }

    return (
        <div className="LikeButton">
            <img
                src={doesLike ? heartOn : heartOff}
                alt="Like button"
                onClick={handleLike}
            />

            {
                doesLike ? <p>Me quiere :3</p> : <p>...yo creo que no me quiere D:</p>
            }

        </div>
    )
}

export default LikeButton