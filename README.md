# GitIngest Chrome Extension

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)](https://www.javascript.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./GitIngest-v1.0.0/LICENSE)

A Chrome browser extension that enhances GitHub repository pages by providing a direct link to view repositories on GitIngest.com. With a single click, transform any GitHub repository URL into its GitIngest equivalent.

<p align="center">
  <img src="assets/screenshots/screenshot.png" alt="GitIngest Extension in Action" width="800"/>
</p>

## Features

- Adds an "Ingest" button next to GitHub's native buttons
- Automatically transforms GitHub URLs to GitIngest URLs
- Seamlessly integrates with GitHub's UI/UX patterns
- Preserves all path parameters and query strings
- Zero configuration required
- Minimal permissions required for security

## Installation

You can install GitIngest directly from the Chrome Web Store:

1. Visit the [Chrome Web Store page](https://chromewebstore.google.com/detail/gitingest/iejmgcbeceleldhbnagkhjigfmpjlbea)
2. Click "Add to Chrome" to install the extension
3. The extension icon should appear in your Chrome toolbar

Alternatively, you can install manually:

1. Download the latest release:
   - Go to the [Releases](https://github.com/bartwisch/gitingestchromeplugin/releases) page
   - Download the latest `GitIngest-v1.0.0.zip` file
   - Extract the ZIP file to a location of your choice

   Or clone the repository:
   ```bash
   git clone https://github.com/bartwisch/gitingestchromeplugin.git
   cd gitingestchromeplugin
   ```

2. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle switch in top right)
   - Click "Load unpacked"
   - Select the `GitIngest-v1.0.0` directory
   - The extension icon should appear in your Chrome toolbar

3. Verify installation:
   - Visit any GitHub repository
   - You should see the "Ingest" button next to GitHub's native buttons
   - If the button doesn't appear, try refreshing the page

## Usage

1. Visit any GitHub repository
2. Look for the "Ingest" button next to the "Code" button
3. Click to view the repository on GitIngest.com

## Development

### Project Structure
```
.
├── README.md                    # Project documentation
├── assets/                      # Project assets
│   ├── screenshots/            # Extension screenshots
│   ├── markups/               # Documentation markups
│   └── chromestore release/   # Chrome Web Store assets
└── GitIngest-v1.0.0/          # Extension source code
    ├── manifest.json          # Extension configuration
    ├── content.js            # Main extension logic
    ├── styles.css            # Button styling
    ├── icon-generator.html   # Tool to generate icons
    ├── icon16.png           # Extension icons
    ├── icon48.png           # Extension icons
    ├── icon128.png          # Extension icons
    └── LICENSE              # MIT License
```

### Local Development
1. Make changes to the source files
2. Reload the extension in `chrome://extensions/`
3. Refresh GitHub pages to see changes

### Building for Production
1. Update version in `manifest.json`
2. Create a new versioned directory (e.g., `GitIngest-v1.0.1`)
3. Copy the extension files to the new directory
4. Test thoroughly before publishing

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](GitIngest-v1.0.0/LICENSE) file for details.

## Links

- [GitIngest Website](https://gitingest.com)
- [Report Issues](https://github.com/bartwisch/gitingestchromeplugin/issues)

## Acknowledgments

- Thanks to GitHub for their excellent UI components
- Icons generated using the included icon generator tool
- All contributors who have helped improve this extension