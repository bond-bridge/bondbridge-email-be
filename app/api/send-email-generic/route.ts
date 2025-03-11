import { type NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// CORS headers to allow requests from any origin
const corsHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'POST, OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Handle OPTIONS request (preflight)
export async function OPTIONS() {
	return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		// const { name, contactInfo, contactType, resourceRequested } = body;

		if (!body) {
			return NextResponse.json(
				{ error: 'Name, contact information, and contact type are required' },
				{ status: 400, headers: corsHeaders }
			);
		}

		// Ensure contactType is either "email" or "phone"
		// if (contactType !== 'email' && contactType !== 'phone') {
		// 	return NextResponse.json(
		// 		{ error: 'Contact type must be either "email" or "phone"' },
		// 		{ status: 400, headers: corsHeaders }
		// 	);
		// }

		// Send email using Resend
		const { data, error } = await resend.emails.send({
			from: 'onboarding@resend.dev',
			to: 'vdhruvyt@gmail.com',
			subject: `New Request`,
			text: JSON.stringify(body),
		});

		if (error) {
			console.error('Resend API error:', error);
			return NextResponse.json(
				{ error: error.message },
				{ status: 500, headers: corsHeaders }
			);
		}

		// Return success response
		return NextResponse.json(
			{ success: true, messageId: data?.id },
			{ headers: corsHeaders }
		);
	} catch (error) {
		console.error('Server error:', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500, headers: corsHeaders }
		);
	}
}
