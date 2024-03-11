import { useEffect, useState } from "react";
import Header from "./Header";
import SmallHeader from "./SmallHeader";
import ModalFrame from "../Modal/ModalFrame";

const getComponentSize = width => {
    if(width >= 1380) {
        return {contentsWidth: 1300, margin: 40};
    }
    else if(width >= 1120) {
        return {contentsWidth: 1040, margin: 30};
    }
    else if(width >= 860) {
        return {contentsWidth: 780, margin: 20};
    }
    else {
        return {contentsWidth: width - 80, margin: 20};
    }
}

const HeaderTemplate = ({windowWidth}) => {
    const [modalStatus, setModalStatus] = useState(0);
    const [componentSize, setComponentSize] = useState(getComponentSize(windowWidth));
    useEffect(() => setComponentSize(getComponentSize(windowWidth)), [windowWidth]);
    return (
        <>
            {windowWidth > 720 ? <Header windowWidth={windowWidth} componentSize={componentSize} changeModal={setModalStatus} /> : <SmallHeader windowWidth={windowWidth} componentSize={componentSize} changeModal={setModalStatus} />}
            {modalStatus === 0 ? null : <ModalFrame modalStatus={modalStatus} changeModal={setModalStatus}/>}
        </>
    );
}

export default HeaderTemplate;