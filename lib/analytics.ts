"use client";

import { sendGTMEvent } from '@next/third-parties/google';

/**
 * Tracks a button or link click
 */
export const trackClick = (label: string, location: string) => {
    sendGTMEvent({
        event: 'btn_click',
        click_label: label,
        click_location: location,
    });
    console.log(`[Analytics] Click Tracked: ${label} at ${location}`);
};

/**
 * Tracks a lead generation event (form submission)
 */
export const trackLead = (formName: string, data: Record<string, unknown>) => {
    sendGTMEvent({
        event: 'generate_lead',
        form_name: formName,
        ...data,
    });
    console.log(`[Analytics] Lead Tracked: ${formName}`, data);
};
