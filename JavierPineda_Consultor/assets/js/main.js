const items = document.querySelectorAll(".item");

items.forEach(item => {
    const header = item.querySelector(".item-header");
    const content = item.querySelector(".item-content");
    const plus = item.querySelector(".plus");

    header.addEventListener("click", () => {
        const isOpen = content.style.maxHeight;

        document.querySelectorAll(".item-content").forEach(c => c.style.maxHeight = null);
        document.querySelectorAll(".plus").forEach(p => p.style.transform = "rotate(0deg)");

        if (!isOpen) {
            content.style.maxHeight = content.scrollHeight + "px";
            plus.style.transform = "rotate(45deg)";
        }
    });
});
