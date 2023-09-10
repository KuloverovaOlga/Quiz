 const createElement = (tag, attr) => {
    const element = document.createElement(tag);
    return Object.assign(element, attr);
};

export default createElement
