const SectionHead = ({body, classProps}) => {
    return ( <div>
           <h1 className={`font-semibold text-[38px] leading-[45.6px]  ${classProps} `}>
            {body}
        </h1>
    </div> );
}
 
export default SectionHead;