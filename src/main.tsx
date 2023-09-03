import { createRoot } from 'react-dom/client';
import { Demo } from './Demo';
import { RuntimeProvider } from './context';
import { API_KeyProvider } from './contextAPi'

function initChatbot(chatbotContainer: Element | DocumentFragment, apiKeys: { apiKeyProject: any; }) {
    createRoot(chatbotContainer).render(
        <API_KeyProvider apiKeys={apiKeys}>
            <RuntimeProvider apiKeyProject={apiKeys.apiKeyProject}>
                <Demo />
            </RuntimeProvider>
        </API_KeyProvider>
  );
}

// Export the initChatbot function
export { initChatbot };

