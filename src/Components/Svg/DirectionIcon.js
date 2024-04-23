export const LeftButton = ({width, height, color}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" fill="none"/>
            <path d="M5.5 15.866C4.83333 15.4811 4.83333 14.5189 5.5 14.134L22 4.60769C22.6667 4.22279 23.5 4.70392 23.5 5.47372V24.5263C23.5 25.2961 22.6667 25.7772 22 25.3923L5.5 15.866Z" fill={color}/>
        </svg>
    );
}

export const LeftLeftButton = ({width, height, color}) => {
    return(
        <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" fill="white"/>
            <path d="M3.06559 15.7998C2.53264 15.3998 2.53264 14.6002 3.06559 14.2002L15.3997 4.94277C16.0589 4.44801 17 4.91835 17 5.74256V24.2574C17 25.0817 16.0589 25.552 15.3997 25.0572L3.06559 15.7998Z" fill={color}/>
            <path d="M11.0656 15.7998C10.5326 15.3998 10.5326 14.6002 11.0656 14.2002L23.3997 4.94277C24.0589 4.44801 25 4.91835 25 5.74256V24.2574C25 25.0817 24.0589 25.552 23.3997 25.0572L11.0656 15.7998Z" fill={color}/>
        </svg>
    );
}

export const RightButton = ({width, height, color}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="30" width="30" height="30" transform="rotate(-180 30 30)" fill="none"/>
            <path d="M24.5 14.134C25.1667 14.5189 25.1667 15.4811 24.5 15.866L8 25.3923C7.33333 25.7772 6.5 25.2961 6.5 24.5263L6.5 5.47372C6.5 4.70392 7.33333 4.22279 8 4.6077L24.5 14.134Z" fill={color}/>
        </svg>
    );
}

export const RightRightButton = ({width, height, color}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="30" width="30" height="30" transform="rotate(-180 30 30)" fill="white"/>
            <path d="M26.9344 14.2002C27.4674 14.6002 27.4674 15.3998 26.9344 15.7998L14.6003 25.0572C13.9411 25.552 13 25.0817 13 24.2574L13 5.74256C13 4.91835 13.9411 4.44801 14.6003 4.94277L26.9344 14.2002Z" fill={color}/>
            <path d="M18.9344 14.2002C19.4674 14.6002 19.4674 15.3998 18.9344 15.7998L6.60028 25.0572C5.94109 25.552 5 25.0817 5 24.2574L5 5.74256C5 4.91835 5.94109 4.44801 6.60028 4.94277L18.9344 14.2002Z" fill={color}/>
        </svg>
    );
}