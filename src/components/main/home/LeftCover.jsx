
import Page from "./Page";

function LeftCover({ fold }) {

    return (
        <div className={`flex justify-end items-center relative w-2/5 h-full shadow-(--shadow-book) transform-3d inset-shadow-sm bg-(--old-book-color) origin-right relative duration-2000 ${fold ? "transform-(--move-the-book)" : ""} z-1`}>
            {/* <Page flip={flip}/>
            
            <hr className="border-1 border-dashed border-(--old-book-color) h-(--book-content-height) absolute z-10"/> */}
        </div>
    )
}

export default LeftCover;