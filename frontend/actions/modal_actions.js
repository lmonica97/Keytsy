export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export const modalOpen = modal => {
    console.log('modal Opening')
    return {
        type: MODAL_OPEN,
        modal
    }
}

export const modalClose = () => {
    console.log('modal Closing')
    return {
        type: MODAL_CLOSE,
    }
}