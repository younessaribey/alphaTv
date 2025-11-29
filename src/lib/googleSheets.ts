// Google Sheets API Integration
export interface OrderData {
    name: string;
    phone: string;
    deviceKey?: string;
    macAddress?: string;
    plan: string;
}

// Replace this URL with your Google Apps Script deployment URL
const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL || (typeof window !== 'undefined' && (window as any).REACT_APP_GOOGLE_SHEETS_URL) || '';

export const submitOrder = async (data: OrderData): Promise<{ success: boolean; error?: string }> => {
    try {
        // If no URL is configured, log to console for testing
        if (!GOOGLE_SHEETS_URL) {
            console.log('📝 Order submitted (Console mode - No Google Sheets URL configured):', data);
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            return { success: true };
        }

        // Use URLSearchParams (application/x-www-form-urlencoded)
        // This is the most compatible method for Google Apps Script
        const params = new URLSearchParams();
        params.append('name', data.name);
        params.append('phone', data.phone);
        params.append('plan', data.plan);
        if (data.deviceKey) params.append('deviceKey', data.deviceKey);
        if (data.macAddress) params.append('macAddress', data.macAddress);

        await fetch(GOOGLE_SHEETS_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params.toString(),
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
