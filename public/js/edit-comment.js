const comments = document.querySelectorAll(".edit-comment");

for (const c of comments) {
    c.addEventListener("click", updateContent);
}

async function updateContent(e) {
    e.preventDefault();
    console.log(e.target.attributes);
    const id = e.target.getAttribute("data-id");
    const content = e.target.getAttribute("data-content");
    const newContent = prompt("Edit content: ", content);

    if (!newContent) {
        return;
    }

    try {
        const res = await axios.patch(`/comments/${id}`, {
            comment: newContent,
        });
        if (res.data.sucess && res.data.reload) {
            window.location.reload();
        }
    } catch (e) {
        console.error(e);
    }
}
