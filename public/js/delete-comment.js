const comments = document.querySelectorAll(".delete-comment");

for (const c of comments) {
    c.addEventListener("click", deleteContent);
}

async function deleteContent(e) {
    e.preventDefault();
    if (!confirm("Are you sure you want to delete this comment?")) {
        return;
    }

    const id = e.target.getAttribute("data-id");

    try {
        const res = await axios.delete(`/comments/${id}`);
        if (res.data.sucess && res.data.reload) {
            window.location.reload();
        }
    } catch (e) {
        console.error(e);
    }
}
