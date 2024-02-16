function generate(): void {
  const url: string = "https://api.adviceslip.com/advice";
  fetch(url, { cache: "no-cache" })
    .then((response: Response) => response.json())
    .then((data: any) => {
      const idText: HTMLElement | null = document.getElementById("advice-id");
      const adviceText: HTMLElement | null = document.getElementById("advice");
      const { id, advice } = data.slip;
      if (idText) idText.innerHTML = id.toString();
      if (adviceText) adviceText.innerHTML = advice;
    });
}

window.addEventListener("load", () => {
  generate();
  const btn: HTMLElement | null = document.getElementById("generate");
  if (btn) {
    btn.addEventListener("click", generate);
  }
});
