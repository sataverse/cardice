const LeftLeftButton = ({width, height, color}) => {
    return(
        <svg width={width} height={height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="30" height="30" fill="white"/>
            <path d="M3.06559 15.7998C2.53264 15.3998 2.53264 14.6002 3.06559 14.2002L15.3997 4.94277C16.0589 4.44801 17 4.91835 17 5.74256V24.2574C17 25.0817 16.0589 25.552 15.3997 25.0572L3.06559 15.7998Z" fill={color}/>
            <path d="M11.0656 15.7998C10.5326 15.3998 10.5326 14.6002 11.0656 14.2002L23.3997 4.94277C24.0589 4.44801 25 4.91835 25 5.74256V24.2574C25 25.0817 24.0589 25.552 23.3997 25.0572L11.0656 15.7998Z" fill={color}/>
        </svg>
    );
}

export default LeftLeftButton;