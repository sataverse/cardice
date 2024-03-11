const LeftButton = ({width, height, color}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" fill="none"/>
            <path d="M5.5 15.866C4.83333 15.4811 4.83333 14.5189 5.5 14.134L22 4.60769C22.6667 4.22279 23.5 4.70392 23.5 5.47372V24.5263C23.5 25.2961 22.6667 25.7772 22 25.3923L5.5 15.866Z" fill={color}/>
        </svg>
    );
}

export default LeftButton;