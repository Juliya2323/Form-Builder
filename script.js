let subInputConditions = [];

function createInput() {
  let inputType = prompt("Enter 1-string, 2-number, 3-yes/no");

  if (inputType == 1) {
    let label = prompt("Enter the question:");

    let inputContainer = document.createElement("div");

    let inputLabel = document.createElement("label");
    inputLabel.innerHTML = label;
    inputContainer.appendChild(inputLabel);

    let inputField = document.createElement("input");
    inputField.type = "text";
    let parentId = "id-" + new Date().getSeconds();
    inputField.className = parentId;
    inputContainer.id = parentId;
    inputContainer.appendChild(inputField);
    inputField.addEventListener("input", () => {
      let parentElement = document.getElementById(parentId);
      let divElement = parentElement.querySelector("div:last-child");
      let childId = divElement.closest("div").id;
      showSubInput(childId, parentId);
    });
    let subInputButton = document.createElement("button");
    subInputButton.textContent = "Add a sub-input";
    subInputButton.addEventListener("click", () => {
      createSubInput(parentId);
    });
    inputContainer.appendChild(subInputButton);

    document.body.appendChild(inputContainer);
  } else if (inputType == 2) {
    let label = prompt("Enter the question:");

    let inputContainer = document.createElement("div");

    let inputLabel = document.createElement("label");
    inputLabel.innerHTML = label;
    inputContainer.appendChild(inputLabel);

    let inputField = document.createElement("input");
    inputField.type = "number";
    let parentId = "id-" + new Date().getSeconds();
    inputField.className = parentId;
    inputContainer.id = parentId;
    inputContainer.appendChild(inputField);
    inputField.addEventListener("input", () => {
      let parentElement = document.getElementById(parentId);
      let divElement = parentElement.querySelector("div:last-child");
      let childId = divElement.closest("div").id;
      showSubInput(childId, parentId);
    });
    let subInputButton = document.createElement("button");
    subInputButton.textContent = "Add a sub-input";
    subInputButton.addEventListener("click", () => {
      createSubInput(parentId);
    });
    inputContainer.appendChild(subInputButton);

    document.body.appendChild(inputContainer);
  } else {
    let label = prompt("Enter the question:");

    let inputContainer = document.createElement("div");

    let inputLabel = document.createElement("label");
    inputLabel.innerHTML = label;
    inputContainer.appendChild(inputLabel);

    let inputField = document.createElement("input");
    inputField.type = "checkbox";
    let parentId = "id-" + new Date().getSeconds();
    inputField.className = parentId;
    inputContainer.id = parentId;
    inputContainer.appendChild(inputField);
    inputField.addEventListener("change", () => {
      let parentElement = document.getElementById(parentId);
      let divElement = parentElement.querySelector("div:last-child");
      let childId = divElement.closest("div").id;
      showSubInput(childId, parentId);
    });
    let subInputButton = document.createElement("button");
    subInputButton.textContent = "Add a sub-input";
    subInputButton.addEventListener("click", () => {
      createSubInput(parentId);
    });
    inputContainer.appendChild(subInputButton);

    document.body.appendChild(inputContainer);
  }

  function createSubInput(parentId) {
    let parent = document.getElementById(parentId);
    let subInputCondition = prompt("Enter condition (for checkbox choose on/off, for a number enter a number it should be equal to =)");
    let subInputType = prompt("Enter 1-string, 2-number, 3-yes/no");

    if (subInputType == 1) {
      let label = prompt("Enter the question:");

      let subInputContainer = document.createElement("div");

      let subInputLabel = document.createElement("label");
      subInputLabel.innerHTML = label;
      subInputContainer.appendChild(subInputLabel);

      let subInputField = document.createElement("input");
      subInputField.type = "text";
      let subParentId = "id-" + new Date().getSeconds();
      subInputField.className = subParentId;
      subInputContainer.id = subParentId;
      subInputContainer.appendChild(subInputField);

      let subInputButton = document.createElement("button");
      subInputButton.textContent = "Add a sub-input";
      subInputButton.addEventListener("click", () => {
        createSubInput(subParentId);
      });
      subInputContainer.appendChild(subInputButton);

      parent.appendChild(subInputContainer);

      subInputContainer.style.display = "none";

      subInputField.addEventListener("input", () => {
        let parentElement = document.getElementById(subParentId);
        let child = parentElement.lastElementChild;
        let childId = child.id;
        showSubInput(childId, subParentId);
      });

      subInputConditions.push({
        id: subParentId,
        text: subInputCondition,
      });
    } else if (subInputType == 2) {
      let label = prompt("Enter the question:");

      let subInputContainer = document.createElement("div");

      let subInputLabel = document.createElement("label");
      subInputLabel.innerHTML = label;
      subInputContainer.appendChild(subInputLabel);

      let subInputField = document.createElement("input");
      subInputField.type = "number";
      let subParentId = "id-" + new Date().getSeconds();
      subInputField.className = subParentId;
      subInputContainer.id = subParentId;
      subInputContainer.appendChild(subInputField);

      let subInputButton = document.createElement("button");
      subInputButton.textContent = "Add a sub-input";
      subInputButton.addEventListener("click", () => {
        createSubInput(subParentId);
      });
      subInputContainer.appendChild(subInputButton);

      parent.appendChild(subInputContainer);

      subInputContainer.style.display = "none";

      subInputField.addEventListener("input", () => {
        let parentElement = document.getElementById(subParentId);
        let child = parentElement.lastElementChild;
        let childId = child.id;
        showSubInput(childId, subParentId);
      });

      subInputConditions.push({
        id: subParentId,
        text: String(subInputCondition),
      });
    } else {
      let label = prompt("Enter the question:");

      let subInputContainer = document.createElement("div");

      let subInputLabel = document.createElement("label");
      subInputLabel.innerHTML = label;
      subInputContainer.appendChild(subInputLabel);

      let subInputField = document.createElement("input");
      subInputField.type = "checkbox";
      let subParentId = "id-" + new Date().getSeconds();
      subInputField.className = subParentId;
      subInputContainer.id = subParentId;
      subInputContainer.appendChild(subInputField);

      let subInputButton = document.createElement("button");
      subInputButton.textContent = "Add a sub-input";
      subInputButton.addEventListener("click", () => {
        createSubInput(subParentId);
      });
      subInputContainer.appendChild(subInputButton);

      parent.appendChild(subInputContainer);

      subInputContainer.style.display = "none";

      subInputField.addEventListener("change", () => {
        let parentElement = document.getElementById(subParentId);
        let child = parentElement.lastElementChild;
        let childId = child.id;
        showSubInput(childId, subParentId);
      });

      subInputConditions.push({
        id: subParentId,
        text: subInputCondition,
      });
    }
  }
}

function showSubInput(childId, parentId) {
  let subElement = document.getElementById(childId);
  let userCondition = document.getElementsByClassName(parentId)[0].value;
  let optionIndex = subInputConditions.findIndex((item) => item.id === childId);
  let condition = subInputConditions[optionIndex].text;

  if (condition === userCondition) {
    subElement.style.display = "block";
  } else {
    subElement.style.display = "none";
  }
}
