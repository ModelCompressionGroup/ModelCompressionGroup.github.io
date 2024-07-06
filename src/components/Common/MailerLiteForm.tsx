// components/MailerLiteForm.tsx
import { useEffect, useState } from 'react';
import Script from 'next/script';

const MailerLiteForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://groot.mailerlite.com/js/w/webforms.min.js?v2d8fb22bb5b3677f161552cd9e774127';
    script.async = true;
    document.body.appendChild(script);

    const fetchScript = document.createElement('script');
    fetchScript.textContent = `
      fetch("https://assets.mailerlite.com/jsonp/968160/forms/122982456997447638/takel");
    `;
    document.body.appendChild(fetchScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(fetchScript);
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
    })
      .then(() => {
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error('Form submission error:', error);
      });
  };

  return (
    <>
      <style jsx global>{`
        @import url("https://assets.mlcdn.com/fonts.css?version=1716800");
        .ml-form-embedContainer {
          box-sizing: border-box;
          display: table;
          margin: 0 auto;
          position: static;
          width: 100% !important;
        }
        .ml-form-embedWrapper {
          background-color: #f6f6f6;
          border-radius: 4px;
          margin: 0;
          padding: 0;
          position: relative;
        }
        .ml-form-embedBody {
          padding: 20px;
          text-align: center;
        }
        .ml-form-embedContent h4 {
          color: #000;
          font-family: 'Open Sans', Arial, Helvetica, sans-serif;
          font-size: 24px;
          margin: 0 0 10px 0;
        }
        .ml-form-embedContent p {
          color: #000;
          font-family: 'Open Sans', Arial, Helvetica, sans-serif;
          font-size: 14px;
          margin: 0 0 10px 0;
        }
        .ml-field-group input {
          background-color: #fff !important;
          color: #333 !important;
          border: 1px solid #ccc;
          border-radius: 4px !important;
          font-family: 'Open Sans', Arial, Helvetica, sans-serif;
          font-size: 14px !important;
          padding: 10px !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }
        .ml-form-embedSubmit button {
          background-color: #000 !important;
          border-radius: 4px !important;
          color: #fff !important;
          cursor: pointer;
          font-family: 'Open Sans', Arial, Helvetica, sans-serif !important;
          font-size: 14px !important;
          font-weight: 700 !important;
          padding: 10px !important;
          width: 100% !important;
          box-sizing: border-box !important;
          margin-top: 20px; /* Add margin to create space */
        }
        .ml-form-embedSubmit button:hover {
          background-color: #333 !important;
        }
        .ml-form-successMessage {
          display: none;
        }
        .ml-form-embedWrapper .ml-form-successBody {
          display: none;
        }
      `}</style>

      <div id="mlb2-15293975" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-15293975">
        <div className="ml-form-align-center">
          <div className="ml-form-embedWrapper embedForm">
            <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
              <div className="ml-form-embedContent">
                <h4>Newsletter</h4>
                <p>Keep up on the latest from us.</p>
              </div>
              {!isSubmitted ? (
                <form
                  className="ml-block-form"
                  action="https://assets.mailerlite.com/jsonp/968160/forms/122982456997447638/subscribe"
                  method="post"
                  target="_blank"
                  onSubmit={handleFormSubmit}
                >
                  <div className="ml-form-formContent">
                    <div className="ml-form-fieldRow ml-last-item">
                      <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                        <input
                          aria-label="email"
                          type="email"
                          name="fields[email]"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <input type="hidden" name="ml-submit" value="1" />
                  <div className="ml-form-embedSubmit">
                    <button type="submit" className="primary">Subscribe</button>
                  </div>
                  <input type="hidden" name="anticsrf" value="true" />
                </form>
              ) : (
                <div className="ml-form-successMessage">
                  <h4>Thank you!</h4>
                  <p>You have successfully joined our subscriber list.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Script id="mailerlite-success" strategy="afterInteractive">
        {`
          function ml_webform_success_15293975() {
            var $ = ml_jQuery || jQuery;
            $('.ml-subscribe-form-15293975 .ml-form-successMessage').show();
            $('.ml-subscribe-form-15293975 .row-form').hide();
          }
        `}
      </Script>
    </>
  );
};

export default MailerLiteForm;
