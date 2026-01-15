<template>
    <footer class="footer">
      <h3 class="footer__title">Inspired by</h3>
      <ul class="footer__list">
        <li class="footer__list__item">
            <a href="https://trello.com/" target="_blank">
                <img src="../../../../../assets/Trello.png" alt="Logo Trello" width="100">
            </a>
        </li>
        <li class="footer__list__item">
            <a href="https://www.atlassian.com/software/jira" target="_blank">
                <img src="../../../../../assets/Jira.png" alt="Logo Jira" width="100">
            </a>
        </li>
        <li class="footer__list__item">
            <a href="https://about.gitlab.com/" target="_blank">
                <img src="../../../../../assets/Gitlab.png" alt="Logo Gitlab" width="100">
            </a>
        </li>
      </ul>
    </footer>
</template>

<style scoped>
    .footer {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .footer__list {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        gap: 10rem;
        list-style-type: none;
    }

    .footer__list__item {
        font-size: 1em;
        font-weight: 700;
        text-align: center;
        cursor: pointer;
    }
</style>