const SemiBold = ({body, classProps}) => {
    return ( 
        <h1 className={`font-semibold text-[67px] leading-[73.7px]  ${classProps} `}>
            {body}
        </h1>
     );
}
 
export default SemiBold;