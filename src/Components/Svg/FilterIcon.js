const FilterIcon = ({width, height}) => {
    return(
        <svg width={width} height={height} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M44 38C48.4183 38 52 34.4182 52 30C52 25.5818 48.4183 22 44 22C39.5817 22 36 25.5818 36 30C36 34.4182 39.5817 38 44 38ZM44 35C46.7615 35 49 32.7615 49 30C49 27.2385 46.7615 25 44 25C41.2385 25 39 27.2385 39 30C39 32.7615 41.2385 35 44 35Z" fill="#959595"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 58C20.4183 58 24 54.4183 24 50C24 45.5817 20.4183 42 16 42C11.5817 42 8 45.5817 8 50C8 54.4183 11.5817 58 16 58ZM16 55C18.7614 55 21 52.7614 21 50C21 47.2386 18.7614 45 16 45C13.2386 45 11 47.2386 11 50C11 52.7614 13.2386 55 16 55Z" fill="#959595"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 18C20.4183 18 24 14.4183 24 10C24 5.58172 20.4183 2 16 2C11.5817 2 8 5.58172 8 10C8 14.4183 11.5817 18 16 18ZM16 15C18.7614 15 21 12.7614 21 10C21 7.23858 18.7614 5 16 5C13.2386 5 11 7.23858 11 10C11 12.7614 13.2386 15 16 15Z" fill="#959595"/>
            <path d="M4 30H36" stroke="#959595" stroke-width="3" stroke-linecap="round"/>
            <path d="M24 10H56" stroke="#959595" stroke-width="3" stroke-linecap="round"/>
            <path d="M24 50H56" stroke="#959595" stroke-width="3" stroke-linecap="round"/>
            <path d="M52 30H56" stroke="#959595" stroke-width="3" stroke-linecap="round"/>
            <path d="M4 50H8" stroke="#959595" stroke-width="3" stroke-linecap="round"/>
            <path d="M4 10H8" stroke="#959595" stroke-width="3" stroke-linecap="round"/>
        </svg>
    );
}

export default FilterIcon;