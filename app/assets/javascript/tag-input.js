function tagInput() {
    const ALL_INPUTS = document.querySelectorAll('.js-tag-input');

    ALL_INPUTS.forEach((input) => {
        const selectedValues = input.value.split(', ');
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
        wrapperEl.appendChild(tagButton);
    })
}

export { tagInput };