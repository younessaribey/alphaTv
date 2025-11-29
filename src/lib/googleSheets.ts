// Google Sheets API Integration
export interface OrderData {
    name: string;
    phone: string;
    deviceKey?: string;
    macAddress?: string;
    plan: string;
}

// Replace this URL with your Google Apps Script deployment URL
const GOOGLE_SHEETS_URL = typeof window !== 'undefined' && (window as any).REACT_APP_GOOGLE_SHEETS_URL || '';

export const submitOrder = async (data: OrderData): Promise<{ success: boolean; error?: string }> => {
    try {
        // If no URL is configured, log to console for testing
        if (!GOOGLE_SHEETS_URL) {
            console.log('📝 Order submitted (Console mode - No Google Sheets URL configured):', data);
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            return { success: true };
        }

        await fetch(GOOGLE_SHEETS_URL, {
            method: 'POST',
            mode: 'no-cors', // Required for Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        // Note: no-cors mode doesn't allow reading the response
        // We assume success if no error was thrown
        console.log('✅ Order submitted to Google Sheets:', data);
        return { success: true };
    } catch (error) {
        console.error('❌ Error submitting order:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error occurred',
        };
    }
};
