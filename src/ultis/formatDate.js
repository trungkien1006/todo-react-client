const formatDate = (dateString, region) => {
    const date = new Date(dateString);
    
    var formatDate = new Intl.DateTimeFormat(region, {
        hour: "2-digit",
        minute: "2-digit",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    const parts = formatDate.formatToParts(date);

    // Chuyển đổi thành object để dễ lấy giá trị
    const dateParts = {};

    parts.forEach(({ type, value }) => {
        dateParts[type] = value;
    });

    // Sắp xếp lại theo ý muốn
    return `${dateParts.year}-${dateParts.month}-${dateParts.day}T${dateParts.hour}:${dateParts.minute}`;
};

const formatDateView = (dateString, region) => {
    const date = new Date(dateString);
    
    var formatDate = new Intl.DateTimeFormat(region, {
        hour: "2-digit",
        minute: "2-digit",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

    const parts = formatDate.formatToParts(date);

    // Chuyển đổi thành object để dễ lấy giá trị
    const dateParts = {};

    parts.forEach(({ type, value }) => {
        dateParts[type] = value;
    });

    // Sắp xếp lại theo ý muốn
    return `${dateParts.hour}:${dateParts.minute} ${dateParts.day}-${dateParts.month}-${dateParts.year}`;
};

export { formatDateView }
export default formatDate;