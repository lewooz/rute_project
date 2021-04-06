import { FC, useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import LottieTypes from '../../enums/lottie_types';
import SuccessAnim from "../../assets/lottie_anims/success_anim.json"

interface LottieProps {
    width: number
    height: number
    lottieType: LottieTypes
    loop?: boolean
    autoplay?: boolean
}

const LottiePlayer: FC<LottieProps> = (props) => {

    const [animationData, setAnimationData] = useState(null)

    useEffect(() => {
        switch (props.lottieType) {
            case LottieTypes.SUCCESS:
                setAnimationData(SuccessAnim)
                break;
            default:
                setAnimationData(SuccessAnim)
                break;
        }
    }, [props.lottieType])

    const lottieOptions = {
        loop: props.loop ?? true,
        autoplay: props.autoplay ?? true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <Lottie
            options={lottieOptions}
            height={props.height}
            width={props.width}
        />
    )
}

export default LottiePlayer