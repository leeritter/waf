// Run function after dom has loaded.
window.addEventListener("DOMContentLoaded", function () {
    tagInput();
});

function tagInput() {
    const ALL_INPUTS = document.querySelectorAll('.js-tag-input');

    ALL_INPUTS.forEach((input) => {
        let selectedValues = [];
        if (input.value) {
            selectedValues = input.value.split(', ');
        }
        const inputParent = input.parentNode;

        // Create searh wrapper
        const textInputWrapper = document.createElement('div');
        textInputWrapper.className = 'tag-ui-text-input-wrapper';

        // Create search field
        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.className = 'tag-ui-text-input';
        textInput.dataset.lpignore = 'true';

        // Listen for focus events
        textInput.addEventListener('focus', (event) => {
            const wrapperEl = event.target.parentNode;
            const menuEl = wrapperEl.querySelector('.tag-ui-options-menu');
            menuEl.style.display = 'block';
            setTimeout(() => {
                wrapperEl.classList.add('--is-focused');
            }, 10); // Nominal ammount of time
        });

        textInput.addEventListener('blur', (event) => {
            const wrapperEl = event.target.parentNode;
            wrapperEl.classList.remove('--is-focused');
            const menuEl = wrapperEl.querySelector('.tag-ui-options-menu');
            setTimeout(() => {
                menuEl.style.display = 'none';
            }, 150); // Duration of animation
        });

        // Create options menu
        const tagOptions = input.dataset.tagOptions.split(', ');
        const tagOptionsMenu = document.createElement('div');
        tagOptionsMenu.className = 'tag-ui-options-menu';
        tagOptions.forEach((option) => {
            const optionButton = document.createElement('button');
            optionButton.className = 'tag-ui-option';
            optionButton.textContent = option;

            // Listen for clicks
            optionButton.addEventListener('click', (event) => {
                event.preventDefault();
                addToTags(option, inputParent);
            });

            // Append to menu
            tagOptionsMenu.appendChild(optionButton);
        })

        // Attach search and options menu to dom
        textInputWrapper.appendChild(textInput);
        textInputWrapper.appendChild(tagOptionsMenu);
        inputParent.appendChild(textInputWrapper);

        // Create div for tags
        const tagDiv = document.createElement('div');
        tagDiv.className = 'tag-ui-button-wrapper';
        inputParent.appendChild(tagDiv);

        renderTags(selectedValues, tagDiv);
    })
}

function renderTags(tags, wrapperEl) {
    tags.forEach((tag) => {
        const tagButton = document.createElement('button');
        tagButton.className = 'tag-ui-button';
        tagButton.textContent = tag;
        tagButton.dataset.tagUiName = tag;

        // Listen for clicks
        tagButton.addEventListener('click', (event) => {
            event.preventDefault();
            removeFromTags(tag, wrapperEl);
        });

        wrapperEl.appendChild(tagButton);
    })
}

function addToTags(tag, parentEl) {
    const inputEl = parentEl.querySelector('.js-tag-input');
    let selectedValues = [];
    if (inputEl.value) {
        selectedValues = inputEl.value.split(', ');
    }

    // Check if tag already exists and add to input if not.
    if (!selectedValues.includes(tag)) {
        selectedValues.push(tag);
        if (selectedValues.length > 1) {
            inputEl.value = selectedValues.join(', ');
        } else {
            inputEl.value = selectedValues[0];
        }

        // Add button
        const wrapperEl = parentEl.querySelector('.tag-ui-button-wrapper');
        const tagButton = document.createElement('button');
        tagButton.className = 'tag-ui-button';
        tagButton.textContent = tag;
        tagButton.dataset.tagUiName = tag;

        // Listen for clicks
        tagButton.addEventListener('click', (event) => {
            event.preventDefault();
            removeFromTags(tag, wrapperEl);
        });

        wrapperEl.appendChild(tagButton);
    }
}

function removeFromTags(tag, wrapperEl) {
    const parentEl = wrapperEl.parentNode;
    const inputEl = parentEl.querySelector('.js-tag-input');
    const selectedValues = inputEl.value.split(', ');
    const index = selectedValues.indexOf(tag);

    if (index > -1) {
        selectedValues.splice(index, 1);
    }

    inputEl.value = selectedValues.join(', ');

    // Remove button
    const buttonEl = wrapperEl.querySelector(`[data-tag-ui-name='${tag}']`);
    buttonEl.remove();

}