import { useState } from "react";
import Page from "./Page";
import { useSelector } from "react-redux";

function Pages({ fold, todoList }) {
    return (
        <>
            <div className={`absolute w-2/5 h-full left-(--pages-left) top-[16px] transform-3d duration-2000 ${fold ? " transform-(--move-the-papers) z-0" : "z-10"}`}>
                <button className={`${fold ? "hidden": ""} duration-300 hover:duration-300 hover:shadow-(--shadow-book) absolute top-(--chevron-top) left-[-44px] cursor-pointer text-3xl bg-(--old-paper-color) rounded-full py-[4px] px-[12px]`}>
                    <i class="fa-solid fa-chevron-left"></i>
                </button>

                <Page fold={fold} side={"right"} todoList={todoList ? todoList.todos : null} />
                <Page fold={fold} side={"left"} todoList={todoList ? todoList.todos.slice(8) : null}/>
                
                <button className={`${fold ? "hidden": ""} duration-300 hover:duration-300 hover:shadow-(--shadow-book) absolute top-(--chevron-top) right-(--chevron-right) cursor-pointer text-3xl bg-(--old-paper-color) rounded-full py-[4px] px-[12px]`}>
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
                <hr className="border-1 border-dashed right-[16px] border-(--old-book-color) h-(--book-content-height) absolute z-10"/>
            </div>
        </>
    )
}

export default Pages;