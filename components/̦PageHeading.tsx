interface PageHeadingProps {
    title: string;
}

const PageHeading:React.FC<PageHeadingProps> = ({ title }) => {
    return (
        <div className="w-fit fade-heading">
            <div className="relative">
                <h1 className="text-2xl 2xl:text-4xl 3xl:text-6xl font-bold pt-8 ml-8 pb-2 w-fit">{title}</h1>
                <hr className="absolute bottom-0 left-8 w-[calc(100%-2rem)]" />
            </div>
        </div>

    );
}

export default PageHeading;