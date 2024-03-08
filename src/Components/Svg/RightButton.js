const RightButton = ({width, height, color}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="30" width="30" height="30" transform="rotate(-180 30 30)" fill="none"/>
            <path d="M24.5 14.134C25.1667 14.5189 25.1667 15.4811 24.5 15.866L8 25.3923C7.33333 25.7772 6.5 25.2961 6.5 24.5263L6.5 5.47372C6.5 4.70392 7.33333 4.22279 8 4.6077L24.5 14.134Z" fill={color}/>
        </svg>
    );
}

export default RightButton