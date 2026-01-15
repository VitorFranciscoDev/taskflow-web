<template>
    <main class="background__main">
      <h1 class="background__main__title">Project Management Made Simple</h1>

      <p class="background__main__subtitle">Organize your work, collaborate with your team, and boost productivity with our intuitive
        Kanban-style boards.</p>

      <div class="background__main__start">
        <fieldset class="background__main__start__fieldset">
          <input name="email" type="email" class="background__main__start__fieldset__input" placeholder="your@email.com">
        </fieldset>
        <button class="start-background__main__start__button">Start</button>
      </div>
    </main>
</template>

<style scoped>
    .background__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 170px;
    gap: 30px;
  }

  .background__main__title {
    color: var(--primary-color);
    font-size: 4.5em;
    max-width: 900px;
    font-weight: 900;
    line-height: 1.2;
    text-align: center;
  }

  .background__main__subtitle {
    color: var(--secondary-color);
    font-size: 1.25em;
    font-weight: 400;
    line-height: 1.6;
    text-align: center;
    max-width: 600px;
  }

  .background__main__start {
    display: flex;
    gap: 15px;
  }

  .background__main__start__fieldset {
    border: none;
  }

  .background__main__start__fieldset__input {
    background-color: var(--background-color);
    color: var(--primary-color);
    width: 300px;
    height: 52px;
    padding: 0 16px;
    border-radius: 10px;
    border: 2px solid rgba(71, 85, 105, 0.4);
    font-size: 15px;
    outline: none;
    transition: all 0.3s ease;
  }

  .start-background__main__start__button {
    background-color: black;
    color: white;
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
  }
</style>