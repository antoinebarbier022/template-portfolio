import LinkCard from "../LinkCard/Link.component";

type CustomLinksSectionType = {

    data?: Array<{name: string, link: string, style?: string}> | undefined,
    hidden?: boolean,
    className?: string
};

function CustomLinksSection({ data, hidden, className } : CustomLinksSectionType) {
    if (hidden || (data?.length === 0)) {
        return (<></>);
    }
    return (<div className={`section-plateforms container rounded-xl mb-8 grid gap-2  ${className}`}>
    {
      data !== undefined &&
      data.map( (value, index) => 
       value.name &&
        <LinkCard name={value.name} link={value.link} key={index}>
          <p className={` text-lg ${value.style}`}>{ value.name }</p>
        </LinkCard>
        )
    }
</div> );
}

export default CustomLinksSection;