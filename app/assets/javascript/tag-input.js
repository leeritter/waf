function tagInput() {
    const ALL_INPUTS = document.querySelectorAll('.js-tag-input');

    ALL_INPUTS.forEach((input) => {
        const selectedValues = input.value.split(', ');
        const inputParent = input.parentNode;

        // Create input for search
        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.className = 'tag-ui-text-input';
        textInput.dataset.lpignore = 'true';
        inputParent.appendChild(textInput);

        // Create div for tags
        const tagDiv = document.createElement('div');
        tagDiv.className = 'tag-ui-button-wrapper';
        inputParent.appendChild(tagDiv);

        renderTags(selectedValues, tagDiv);
    })
}

function renderTags(tags, wrapperEl) {
    tags.forEach((tag) => {
        console.log('tag', tag);
        const tagButton = document.createElement('button');
        tagButton.className = 'tag-ui-button';
        tagButton.textContent = tag;
        wrapperEl.appendChild(tagButton);
    })
}

export { tagInput };