export const TimeIcon = ({width, height}) => {
    return(
        <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="4"/>
            <path d="M20 9L20 21" stroke="white" strokeWidth="4" strokeLinecap="round"/>
            <path d="M29 21H20" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        </svg>
    );
}

export const PlayerIcon = ({width, height}) => {
    return(
        <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="12" r="10" stroke="white" strokeWidth="4"/>
            <path d="M33.4967 34.0841C31.1489 27.463 25.631 24 20 24C14.369 24 8.85114 27.4631 6.50328 34.0841C5.78282 36.1158 7.38463 38 9.30581 38L30.6942 38C32.6154 38 34.2172 36.1158 33.4967 34.0841Z" stroke="white" strokeWidth="4" strokeLinecap="round"/>
        </svg>
    );
}

export const CardIcon = ({width, height}) => {
    return(
        <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="2" width="28" height="36" rx="3" stroke="white" strokeWidth="4"/>
            <path d="M20 10L28 20L20 30L12 20L20 10Z" fill="white"/>
        </svg>
    );
}