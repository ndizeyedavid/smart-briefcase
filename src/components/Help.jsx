import MarkdownEditor from '@uiw/react-markdown-editor';
import { useEffect } from 'react';
const Help = () => {
    document.documentElement.setAttribute('data-color-mode', 'light')

    let mdStr = `
# Help Guide: Smart Briefcase

### Using the App

The app interface will display key information about your briefcase:

* **Location:** A map view showing your briefcase's current location. The map will update periodically to reflect briefcase movement.
* **Status:** An indicator showing whether the briefcase is currently open or closed. This functionality relies on a sensor within the tracker device.
* **History:** A log that records the briefcase's location history over time. Entries will typically include timestamps and locations.

**Additional Features:**

* **Alerts:** You can configure the app to receive alerts if the briefcase moves. This can be helpful in case of theft or unexpected movement.
* **Settings:** The app settings allow you to customize map views, and adjust notification preferences.

**Using the Briefcase Tracker on the Go:**

* Whenever you want to check your briefcase's location, status, or history, simply open this site.
* The app will automatically update with the latest information from the tracker device.

### Troubleshooting

* **Connection Issues:** If the app has difficulty connecting to the tracker device, ensure there is stable internet connection
* **Location Inaccuracy:** GPS accuracy can vary depending on location. In some cases, the briefcase's location might be displayed with a slight offset.
* **For any other issues**, consult the app's developer for further assistance.

### Additional Notes

* This app relies on an active internet connection to function properly.
* The briefcase tracker device's battery life will depend on usage patterns. Refer to the device's manual for charging instructions.
* For security reasons, it's recommended to keep your credentials hidden always.

    `;

    return (
        <>
            <div className='h-full p-5 overflow-y-auto px-7'>
                <MarkdownEditor.Markdown source={mdStr} height="100%" />
            </div>
        </>
    )
}

export default Help
