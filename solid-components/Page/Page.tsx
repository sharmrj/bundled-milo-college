import { Suspense } from "solid-js";

type PagePropTypes = {
    html: String | any;
}

const Page = (props: PagePropTypes) => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <div innerHTML={props.html} />
        </Suspense>
    );
};

export default Page;