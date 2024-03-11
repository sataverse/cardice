const RightRightButton = ({width, height, color}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="30" width="30" height="30" transform="rotate(-180 30 30)" fill="white"/>
            <path d="M26.9344 14.2002C27.4674 14.6002 27.4674 15.3998 26.9344 15.7998L14.6003 25.0572C13.9411 25.552 13 25.0817 13 24.2574L13 5.74256C13 4.91835 13.9411 4.44801 14.6003 4.94277L26.9344 14.2002Z" fill={color}/>
            <path d="M18.9344 14.2002C19.4674 14.6002 19.4674 15.3998 18.9344 15.7998L6.60028 25.0572C5.94109 25.552 5 25.0817 5 24.2574L5 5.74256C5 4.91835 5.94109 4.44801 6.60028 4.94277L18.9344 14.2002Z" fill={color}/>
        </svg>
    );
}

export default RightRightButton;