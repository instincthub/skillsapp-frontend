window.addEventListener("load", () => {
  const form = document.querySelector("#new_team_form");
  const input = document.querySelector(".new_team_input");
  const listTeam = document.querySelector(".content");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert("Please add something");
      return;
    }
    const perTeam = document.createElement("div");
    perTeam.classList.add("p_person");

    const contentEl = document.createElement("div");
    contentEl.classList.add("content");
    // contentEl.innerText = task;
    perTeam.appendChild(contentEl);

    const text = document.createElement("input");
    text.classList.add("txt_h6");
    text.type = "text";
    text.value = task;
    text.setAttribute("readonly", "readonly");

    contentEl.appendChild(text);

    listTeam.appendChild(perTeam);
  });
});
