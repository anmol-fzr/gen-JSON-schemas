export function scriptInsert(script: HTMLElement, body: HTMLBodyElement) {
    body.appendChild(script);
}

export function scriptGen(data: string) {
    const script = document.createElement('script')
    script.type = 'application/ld+json'

    script.appendChild(JSON.parse(data))

    script.onload = () => {
        console.log('Script loaded successfuly');
    };

    script.onerror = () => {
        console.log('Error occurred while loading script');
    };
    return script
}
