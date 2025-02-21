function TodoHeaderTimeDiff({ data }) {
    return (
        <>
            {
                data.isBurn &&
                <div className={`text-(--status-canceled) text-3xl absolute top-[-6px] left-[-6px]`}>
                    <i class="fa-solid fa-fire"></i>
                </div>
            }

            <p className={`mt-[6px] text-(--status-${data.isLate ? "canceled" : "none"})`}>
                {data.timeDiff}
            </p>
        </>
    )
}

export default TodoHeaderTimeDiff;