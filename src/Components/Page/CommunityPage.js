import styled from "styled-components";
import { useTemp } from "../../Modules/store";
import { useEffect } from "react";

const Button = styled.button`
    background-color: aliceblue;
`

const CommunityPage = () => {
    const { temp, setTemp } = useTemp();
    useEffect(() => {
        console.log(temp);
    }, [temp])
    return (
        <>
            <Button onClick={() => setTemp(3)}>!!!</Button>
        </>
    );
}

export default CommunityPage;