export default function Home() {
	return (
		<main className='min-h-screen p-8 max-w-3xl mx-auto'>
			<h1 className='text-3xl font-bold mb-6'>Email API Service</h1>

			<div className='bg-white p-6 rounded-lg shadow-md'>
				<h2 className='text-xl font-semibold mb-4'>API Documentation</h2>

				<div className='mb-6'>
					<h3 className='text-lg font-medium mb-2'>Endpoint</h3>
					<code className='bg-gray-100 p-2 rounded block'>
						POST /api/send-email
					</code>
				</div>

				<div className='mb-6'>
					<h3 className='text-lg font-medium mb-2'>Request Body</h3>
					<pre className='bg-gray-100 p-3 rounded overflow-x-auto'>
						{`{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "123-456-7890", // optional
  "company": "Acme Inc", // optional
  "message": "Hello, I'd like to learn more about your services."
}`}
					</pre>
				</div>

				<div className='mb-6'>
					<h3 className='text-lg font-medium mb-2'>Response</h3>
					<pre className='bg-gray-100 p-3 rounded overflow-x-auto'>
						{`// Success
{
  "success": true,
  "messageId": "re_123abc456def"
}

// Error
{
  "error": "Error message"
}`}
					</pre>
				</div>

				<div>
					<h3 className='text-lg font-medium mb-2'>CORS</h3>
					<p>This API allows requests from any origin.</p>
				</div>
			</div>
		</main>
	);
}
