import React from 'react';

const MailerLiteContactForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Gather form data
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);

    // Prepare data for submission (modify according to your API's requirements)
    const submitData = {
      fields: {
        name: formProps['fields[name]'],
        email: formProps['fields[email]'],
        company: formProps['fields[company]'],
        last_name: formProps['fields[last_name]']
      }
    };

    try {
      // Submit form data using fetch
      const response = await fetch('https://assets.mailerlite.com/jsonp/968160/forms/126517054812456952/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(submitData)
      });

      const responseData = await response.json();
      // Handle response here (e.g., show success message, log data)
      console.log('Form submitted successfully:', responseData);
      alert('Thank you! Your form has been submitted.');
    } catch (error) {
      // Handle errors here
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div id="mlb2-16328899" className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <div className="text-center">
        <div className="p-4">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900">Schedule a Demo now!</h4>
            <p className="text-sm text-gray-600">Let’s get this conversation started. Tell us a bit about yourself, and we’ll get in touch as soon as we can.</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input type="text" name="fields[name]" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your name" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Work Email</label>
                <input type="email" name="fields[email]" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your email" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company Name</label>
                <input type="text" name="fields[company]" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your company name" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Describe Your Edge AI Challenge</label>
                <textarea name="fields[last_name]" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Describe your challenge"></textarea>
              </div>
              <div className="mt-6">
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Send Request
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">By submitting this form you accept the <a href="https://ampleai.io/terms/privacy-policy" target="_blank" className="text-indigo-600 hover:text-indigo-800">Privacy Policy</a>.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailerLiteContactForm;
