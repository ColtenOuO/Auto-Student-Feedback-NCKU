document.addEventListener("DOMContentLoaded", () => {
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");

    if (btn1) {
        btn1.addEventListener("click", () => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    func: () => {
                        document.querySelectorAll("label:first-child input[type=radio]").forEach(v => v.click());
                    }
                });
            });
        });
    }

    if (btn2) {
        btn2.addEventListener("click", () => {
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    func: () => {
                        document.querySelectorAll("tr").forEach((tr) => {
                            let targetInput;
                            if (tr.id && ( tr.id.endsWith("3_1") || tr.id.endsWith("3_2") )) {
                                targetInput = tr.querySelector("label:first-child input[type=radio]");
                            } else {
                                targetInput = tr.querySelector("label:nth-child(5) input[type=radio]");
                            }

                            if (targetInput) {
                                targetInput.click();
                            }
                        });
                    }
                });
            });
        });
    }
});
