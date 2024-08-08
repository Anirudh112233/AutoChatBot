# Auto Chat Bot Extension

## Overview

-The **Auto Chat Bot Extension** is a Chrome extension designed to help users chat with their friends, colleagues, and others using the Gemini API. 
-The extension automatically reads the user's message and replies with the most appropriate response. 
-This makes communication easier and more efficient across various platforms like WhatsApp, LinkedIn, Facebook, Instagram, and Telegram.

## Features

- **Application Selection**: Choose from a list of popular applications like WhatsApp, LinkedIn, Facebook, Instagram, and Telegram.
- **Message Input**: Type a message or tone to be processed and sent.
- **Interactive Button**: A functional button that changes color when clicked, enhancing user experience.
- **Automatic Replies**: Utilizes the Gemini API to generate and send the most probable response based on the input message.

## Files

### HTML (`index.html`)

The HTML file defines the structure of the extension's popup window. It includes:

- A form with a dropdown to select the desired application.
- An input field to type a message.
- A functional button that triggers the interaction with the Gemini API.

### CSS (`styles.css`)

The CSS file customizes the appearance of the extension using Bulma and additional styles. Key customizations include:

- Styling for the title, body, and form elements.
- A glowing effect for the button when clicked.
- Custom colors and layouts for a polished UI.

### JavaScript (`popup.js`)

The JavaScript file handles the logic of sending the user's query to the Gemini API and updating the UI with the result. It includes:

- Event listeners for button clicks.
- API interaction using asynchronous requests.
- Dynamic UI updates based on API responses.

## Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/auto-chat-bot-extension.git
    ```

2. **Navigate to the Directory**:
    ```bash
    cd auto-chat-bot-extension
    ```

3. **Load the Extension in Chrome**:
    - Open Chrome and go to `chrome://extensions/`.
    - Enable "Developer mode" by toggling the switch in the top right corner.
    - Click on "Load unpacked" and select the `auto-chat-bot-extension` directory.

4. **Use the Extension**:
    - Click on the extension icon in the Chrome toolbar to open the popup.
    - Select an application, enter your message, and click the "Enable" button to interact with the Gemini API.

## Usage

1. **Select an Application**: Choose an application from the dropdown menu.
2. **Enter a Message**: Type your message in the input field.
3. **Submit**: Click the "Enable" button to send your query.
4. **View Results**: The response from the Gemini API will be displayed below the button.

## Customization

You can easily customize the appearance and behavior of the extension by modifying the following files:

- **HTML**: Update `index.html` to change the structure or add new elements.
- **CSS**: Edit `styles.css` to customize styles such as colors, margins, and effects.
- **JavaScript**: Modify `popup.js` to change the interaction logic or add new features.
