let riskyClauseAbortController = null;

export const setAbortController = (controller) => {
    riskyClauseAbortController = controller;
};

export const abortPreviousRequest = () => {
    if (riskyClauseAbortController) {
        riskyClauseAbortController.abort();
        console.log('Aborted previous request');
        riskyClauseAbortController = null;
    } else {
        console.log('No previous request to abort');
    }
};