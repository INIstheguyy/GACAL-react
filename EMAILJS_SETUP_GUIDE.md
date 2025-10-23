# EmailJS Setup Guide for Gift Card Donation Form

This guide will help you set up EmailJS to enable the gift card donation form to send emails with attachments.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. After logging in, go to the **Email Services** section
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Important**: Copy the **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to the **Email Templates** section
2. Click **Create New Template**
3. Use the following template structure:

### Template Content:

**Subject:**
```
New Gift Card Donation from {{from_name}}
```

**Body:**
```
You have received a new gift card donation!

Donor Information:
- Name: {{from_name}}
- Email: {{from_email}}

Message: {{message}}

Gift Card Images:
- Front Card: {{front_card_name}}
- Back Card: {{back_card_name}}

The images are attached as base64 encoded data in the email.

---
This email was sent from the GACAL donation form.
```

4. **Important**: Copy the **Template ID**
5. Save the template

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called User ID)
3. Copy this key

## Step 5: Update the Code

Open the file `src/components/GiftCardDonationForm.js` and replace the following placeholders around line 60-62:

```javascript
const serviceId = "YOUR_SERVICE_ID"; // Replace with your Service ID from Step 2
const templateId = "YOUR_TEMPLATE_ID"; // Replace with your Template ID from Step 3
const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your Public Key from Step 4
```

### Example:
```javascript
const serviceId = "service_abc123";
const templateId = "template_xyz789";
const publicKey = "user_def456ghi";
```

## Step 6: Test the Form

1. Save all changes
2. Restart your development server if needed
3. Navigate to the Donate page
4. Fill out the gift card donation form
5. Upload test images (front and back of card)
6. Submit the form
7. Check your email inbox (matchinggift1@gmail.com) for the donation notification

## Important Notes

### File Size Limits
- Maximum file size per image: 5MB
- Accepted formats: JPEG, PNG, GIF
- EmailJS free plan has a limit of 200 emails per month

### Security
- Your EmailJS keys are safe to use in client-side code
- EmailJS handles the email sending securely
- Never expose your email password in the code

### Troubleshooting

**If emails are not being sent:**
1. Check browser console for error messages
2. Verify all three IDs (Service ID, Template ID, Public Key) are correct
3. Ensure your EmailJS account is verified
4. Check that you haven't exceeded the free plan limit (200 emails/month)
5. Make sure the email service is properly connected in EmailJS dashboard

**If images are not appearing:**
- The images are sent as base64 encoded strings
- Some email clients may block base64 images
- Consider using a file upload service (like Cloudinary) for better compatibility

### Alternative Solutions

If you need more advanced features, consider:

1. **Backend API**: Create a Node.js/Express backend with Nodemailer
2. **Serverless Functions**: Use Vercel/Netlify functions
3. **Form Services**: Use services like Formspree Pro or Getform

### Support

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

---

## Quick Setup Checklist

- [ ] Create EmailJS account
- [ ] Add email service and copy Service ID
- [ ] Create email template and copy Template ID
- [ ] Get Public Key from account settings
- [ ] Update GiftCardDonationForm.js with all three IDs
- [ ] Test the form with sample images
- [ ] Verify email receipt

Once completed, your gift card donation form will be fully functional!