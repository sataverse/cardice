const NotFoundIcon = ({width, height}) => {
    return (
        <svg width={width} height={height} viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="54" cy="98" r="30" fill="#EFEFEF"/>
            <circle cx="247" cy="98" r="30" fill="#EFEFEF"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M226.449 236.042C244.997 236.042 253.584 213.01 239.563 200.868L171.225 141.685C159.2 131.271 141.352 131.271 129.327 141.685L60.9887 200.868C46.9681 213.01 55.5554 236.042 74.1028 236.042C78.9198 236.042 83.5756 234.307 87.2169 231.153L129.327 194.685C141.352 184.271 159.2 184.271 171.225 194.685L213.335 231.153C216.976 234.307 221.632 236.042 226.449 236.042Z" fill="#EFEFEF"/>
        </svg>
    );
}

export default NotFoundIcon;