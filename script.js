document.addEventListener("DOMContentLoaded", function() {
    // ページ表示時のアニメーション
    document.body.classList.add('visible');

    // スクロール時にアニメーションを適用する要素
    const elementsToAnimate = document.querySelectorAll('section, main h1, .blog-list, .radio-list, .blog-post-detail, .works-container, .profile-container, .news-list-page');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // WORKSページ専用のフィルタ機能
    const worksContainer = document.querySelector('.works-container');
    if (worksContainer) {
        const filterLinks = document.querySelectorAll('.filter-link');
        const workCards = document.querySelectorAll('.work-card');

        filterLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();

                // activeクラスの切り替え
                filterLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');

                const filter = this.getAttribute('data-filter');

                workCards.forEach(card => {
                    if (filter === 'all' || card.classList.contains(filter)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }
});