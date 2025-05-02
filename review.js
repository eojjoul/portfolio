function saveText() {
    const input = document.getElementById('reviewText');
    const reviewBox = document.getElementById('reviewBox');

    if (input.value.trim() === "") {
        alert("후기를 작성해주세요!");
        return;
    }

    const newReview = document.createElement('div');
    newReview.textContent = input.value;
    newReview.className = 'reviewItem';

    // 최신 글이 위에 오도록 맨 앞에 추가
    reviewBox.insertBefore(newReview, reviewBox.firstChild);

    // textarea 초기화
    input.value = '';  
}
