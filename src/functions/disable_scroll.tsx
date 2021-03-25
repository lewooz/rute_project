const disableScroll = (disableScroll: boolean) => {
    document.body.style.overflow = disableScroll ? 'hidden' : 'unset'
}

export default disableScroll