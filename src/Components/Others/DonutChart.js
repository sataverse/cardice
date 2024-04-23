import styled from "styled-components";

const DonutChartBackground = styled.div.attrs(props => ({
    style: { 
        width: `${props.$width}px`, 
        height: `${props.$width}px`,
        background: `conic-gradient(${props.$backgroundcolor} 0% ${props.$percent}%, transparent ${props.$percent}% 100%)`
    }
}))`
    position: relative;
    border-radius: 50%;
`;

const DonutChartCenter = styled.div.attrs(props => ({
    style: { 
        width: `${props.$width}px`, 
        height: `${props.$width}px`,
        backgroundColor: props.$backgroundcolor
    }
}))`
    position: absolute;
    top: 50%; 
    left: 50%;
    border-radius: 50%;
    text-align: center; 
    transform: translate(-50%, -50%);
`;

const Text = styled.div`
    position: absolute;
    top: 48%; 
    left: 55%;
    transform: translate(-50%, -50%);
`;

const TextNumber = styled.div.attrs(props => ({
    style: { color: props.$textcolor }
}))`
    font-size: 1.4rem;
`;

const TextPercent = styled.div.attrs(props => ({
    style: { color: props.$textcolor }
}))`
    font-size: 0.7rem;
`;

const DonutChart = ({width, percent, backgroundColor, centerColor, textColor}) => {
    return (
        <DonutChartBackground $width={width} $backgroundcolor={backgroundColor} $percent={percent}>
            <DonutChartCenter $width={width * 0.8} $backgroundcolor={centerColor}>
                <Text className='frow fjcenter facenter'>
                    <TextNumber $textcolor={textColor}>{Math.round(percent)}</TextNumber>
                    <TextPercent $textcolor={textColor}>{'%'}</TextPercent>
                </Text>
            </DonutChartCenter>
        </DonutChartBackground>
    );
}

export default DonutChart;