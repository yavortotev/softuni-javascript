window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.querySelector("#first-name");
    const lastNameInput = document.querySelector("#last-name");
    const fromDateInput = document.querySelector("#from-date");
    const toDateInput = document.querySelector("#to-date");
    const nextButton = document.querySelector("#next-btn");

    const infoList = document.querySelector(".info-list");
    const confirmList = document.querySelector(".confirm-list");
    const statusHeader = document.getElementById("status");

    nextButton.addEventListener('click', onNext);

    function onNext(e) {
        e.preventDefault();

        if (
            firstNameInput.value === '' ||
            lastNameInput.value === '' ||
            fromDateInput.value === '' ||
            toDateInput.value === '' ||
            new Date(fromDateInput.value) >= new Date(toDateInput.value)
        ) {
            return;
        }

        const li = document.createElement('li');
        li.classList.add('vacation-content');

        const article = document.createElement('article');

        const name = `${firstNameInput.value} ${lastNameInput.value}`;
        const h3 = document.createElement('h3');
        h3.textContent = `Name: ${name}`;

        const pFrom = document.createElement('p');
        pFrom.textContent = `From date: ${fromDateInput.value}`;

        const pTo = document.createElement('p');
        pTo.textContent = `To date: ${toDateInput.value}`;

        article.append(h3, pFrom, pTo);
        li.appendChild(article);

        const editBtn = createButton('Edit', 'edit-btn', () => onEdit(li, name, fromDateInput.value, toDateInput.value));
        const continueBtn = createButton('Continue', 'continue-btn', () => onContinue(li, name, fromDateInput.value, toDateInput.value));

        li.append(editBtn, continueBtn);
        infoList.appendChild(li);

        nextButton.disabled = true;
        clearInputs();
    }

    function onEdit(li, name, fromDate, toDate) {
        const [first, last] = name.split(' ');
        firstNameInput.value = first;
        lastNameInput.value = last;
        fromDateInput.value = fromDate;
        toDateInput.value = toDate;

        li.remove();
        nextButton.disabled = false;
    }

    function onContinue(li, name, fromDate, toDate) {
        li.querySelector('.edit-btn').remove();
        li.querySelector('.continue-btn').remove();

        const confirmBtn = createButton('Confirm', 'confirm-btn', () => onConfirm(li));
        const cancelBtn = createButton('Cancel', 'cancel-btn', () => onCancel(li));

        li.append(confirmBtn, cancelBtn);
        confirmList.appendChild(li);
    }

    function onConfirm(li) {
        li.remove();
        nextButton.disabled = false;
        updateStatus("Vacation Requested", "vacation-confirmed");
    }

    function onCancel(li) {
        li.remove();
        nextButton.disabled = false;
        updateStatus("Cancelled Vacation", "vacation-cancelled");
    }

    function updateStatus(text, className) {
        statusHeader.textContent = text;
        statusHeader.className = className;
        statusHeader.addEventListener('click', () => location.reload());
    }

    function createButton(text, className, callback) {
        const btn = document.createElement('button');
        btn.className = className;
        btn.textContent = text;
        btn.addEventListener('click', callback);
        return btn;
    }

    function clearInputs() {
        firstNameInput.value = '';
        lastNameInput.value = '';
        fromDateInput.value = '';
        toDateInput.value = '';
    }
}
