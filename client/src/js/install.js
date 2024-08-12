const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default behavior
    event.preventDefault();
    // Store the event for later use
    deferredPrompt = event;
    // Show the install button
    butInstall.style.display = 'block'; 
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        const { outcome } = await deferredPrompt.userChoice;
        // Log the result
        console.log(`User response to the install prompt: ${outcome}`);
        // Reset the deferredPrompt variable
        deferredPrompt = null;
        // Hide the install button
        butInstall.style.display = 'none';
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App installed', event);
});
