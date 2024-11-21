import {PuffLoader} from "react-spinners";
import {CSSProperties, } from "react";

const override: CSSProperties = {
    display: "red",
    margin: "0 auto",
    borderColor: "red"
}
export default function Loading() {


    return (
        <div className='h-[70vh] flex justify-center items-center'>
            <PuffLoader color={'#004166'} cssOverride={override} size={150} aria-label={"Loading Spinner"} data-testid={"loader"}/>
        </div>
    )
}
