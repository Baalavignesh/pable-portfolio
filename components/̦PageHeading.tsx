interface PageHeadingProps {
    title: string;
}

let PageHeading:React.FC<PageHeadingProps> = ({ title }) => {
    return (
        <div className="w-fit">
        <h1 className="text-2xl 2xl:text-4xl 3xl:text-6xl font-bold mt-10 2xl:mt-12 3xl:mt-28 pb-6 w-fit">{title}</h1>
      <hr className="w-full" />
    </div>

    );
}

export default PageHeading;